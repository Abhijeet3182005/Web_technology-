# Smart Daily Progress Tracker

A full-stack application built with Angular (Frontend) and Express.js (Backend) with MySQL.

## Prerequisites
- Node.js (v18+)
- MySQL Server running locally on port 3306

## 1. Database Setup
1. Open your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or terminal).
2. Connect using your root credentials (by default `root` and `password`).
3. Run the SQL script located at `backend/schema.sql`. This will create the `progress_tracker` database and necessary tables.

## 2. Backend Setup
1. Open a terminal and navigate to the `backend` directory.
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Check the `.env` file in the `backend` folder. Adjust `DB_USER` and `DB_PASSWORD` if your local MySQL setup requires different credentials.
4. Start the backend server:
   ```bash
   node server.js
   ```
   *The server should run on http://localhost:5000*

## 3. Frontend Setup
1. Open a new terminal and navigate to the `frontend` directory.
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular application:
   ```bash
   ng serve
   ```
   *If you do not have Angular CLI installed globally, you can run:*
   ```bash
   npm run start
   ```
4. Open your browser and navigate to `http://localhost:4200`.

## Features
- **Authentication**: JWT secured endpoints to log in and register.
- **Dashboard**: Get today's productivity score, personalized feedback, and a comparison with yesterday to keep you on your toes!
- **Add Daily Entry**: Log your hours cleanly with interactive premium UI.
- **Weekly Progress**: Compare your efforts over the last 7 days.

Enjoy tracking your daily progress!
