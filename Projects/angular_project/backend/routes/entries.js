const express = require('express');
const router = express.Router();
const pool = require('../db');
const authMiddleware = require('../middleware/authMiddleware');

const calculateFeedback = (score, wasted_hours) => {
  let feedback = '';
  if (score > 80) feedback = "Excellent productivity";
  else if (score >= 50) feedback = "Good, but can improve";
  else feedback = "Try to focus more";

  if (wasted_hours > 3) {
    feedback += " - Reduce distractions";
  }
  return feedback;
};

const getLocalTodayDate = () => {
    return new Date().toISOString().split('T')[0];
};

const getLocalYesterdayDate = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
};

// POST /entries
router.post('/', authMiddleware, async (req, res) => {
  let { date, study_hours, learning_hours, wasted_hours, activity_hours } = req.body;
  const user_id = req.user_id;

  try {
    // Validate inputs
    study_hours = parseFloat(study_hours) || 0;
    learning_hours = parseFloat(learning_hours) || 0;
    wasted_hours = parseFloat(wasted_hours) || 0;
    activity_hours = parseFloat(activity_hours) || 0;

    if (study_hours < 0 || learning_hours < 0 || wasted_hours < 0 || activity_hours < 0) {
        return res.status(400).json({ success: false, data: null, message: 'Values cannot be negative' });
    }

    if (!date) {
        date = getLocalTodayDate();
    }

    // Calculate score
    let score = (study_hours * 2) + (learning_hours * 3) + (activity_hours * 1) - (wasted_hours * 2);
    // Normalize score
    if (score < 0) score = 0;
    if (score > 100) score = 100;

    const feedback = calculateFeedback(score, wasted_hours);

    const [result] = await pool.query(
      'INSERT INTO Entries (user_id, date, study_hours, learning_hours, wasted_hours, activity_hours, score) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, date, study_hours, learning_hours, wasted_hours, activity_hours, score]
    );

    res.status(201).json({
      success: true,
      data: { id: result.insertId, date, study_hours, learning_hours, wasted_hours, activity_hours, score, feedback },
      message: 'Entry added successfully'
    });
  } catch (error) {
    console.error('Entries POST error:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ success: false, data: null, message: 'Entry for this date already exists' });
    }
    res.status(500).json({ success: false, data: null, message: 'Server error' });
  }
});

// GET /entries/today
router.get('/today', authMiddleware, async (req, res) => {
    const user_id = req.user_id;
    const today = getLocalTodayDate();

    try {
        const [entries] = await pool.query('SELECT * FROM Entries WHERE user_id = ? AND date = ?', [user_id, today]);
        if (entries.length === 0) {
            return res.json({ success: true, data: null, message: 'No entry for today' });
        }
        
        const entry = entries[0];
        entry.feedback = calculateFeedback(entry.score, entry.wasted_hours);
        res.json({ success: true, data: entry, message: 'Today entry fetched successfully' });
    } catch (error) {
        res.status(500).json({ success: false, data: null, message: 'Server error' });
    }
});

// GET /entries/yesterday
router.get('/yesterday', authMiddleware, async (req, res) => {
    const user_id = req.user_id;
    const yesterday = getLocalYesterdayDate();

    try {
        const [entries] = await pool.query('SELECT * FROM Entries WHERE user_id = ? AND date = ?', [user_id, yesterday]);
        if (entries.length === 0) {
            return res.json({ success: true, data: null, message: 'No entry for yesterday' });
        }
        
        const entry = entries[0];
        entry.feedback = calculateFeedback(entry.score, entry.wasted_hours);
        res.json({ success: true, data: entry, message: 'Yesterday entry fetched successfully' });
    } catch (error) {
        res.status(500).json({ success: false, data: null, message: 'Server error' });
    }
});

// GET /entries/weekly
router.get('/weekly', authMiddleware, async (req, res) => {
    const user_id = req.user_id;
    
    try {
        // Get last 7 days entries ordered by date desc
        const [entries] = await pool.query(
            'SELECT * FROM Entries WHERE user_id = ? ORDER BY date DESC LIMIT 7',
            [user_id]
        );
        res.json({ success: true, data: entries, message: 'Weekly entries fetched successfully' });
    } catch (error) {
        res.status(500).json({ success: false, data: null, message: 'Server error' });
    }
});

module.exports = router;
