// 1. GLOBAL UTILITIES (Database Replacement)
 
const getBookings = () => JSON.parse(localStorage.getItem("bookings")) || [];
const saveBookings = (data) => localStorage.setItem("bookings", JSON.stringify(data));

const formatDate = (dateStr) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
};

// 2. MOCK DATA (Replaces the real API)
 
const MOCK_EVENTS = [
    { title: "Web Dev Workshop", body: "Learn HTML, CSS, and JS from scratch." },
    { title: "AI Seminar 2026", body: "Exploring the future of Artificial Intelligence." },
    { title: "Rock Concert", body: "Join us for a night of music and lights." }
];

// 3. PAGE ROUTER
 
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("index.html") || path.endsWith("/")) {
        initHomePage();
    } else if (path.includes("booking.html")) {
        initBookingPage();
    } else if (path.includes("dashboard.html")) {
        initDashboardPage();
    }
});


//  4. HOME PAGE (Using Local Mock Data)
 
    async function initHomePage() {
        const inspirationText = document.getElementById('inspirationText');
        const apiDataContainer = document.getElementById('apiDataContainer');

        // Simulate a 1-second "loading" delay to show off Async/Await
        if (inspirationText) inspirationText.textContent = "Loading local data...";

        await new Promise(resolve => setTimeout(resolve, 800));

        if (inspirationText) inspirationText.textContent = "Plan your next big move today!";
        
        if (apiDataContainer) {
            apiDataContainer.innerHTML = MOCK_EVENTS.map(ev => `
                <div class="booking-card">
                    <div class="badge">Trending</div>
                    <h3>${ev.title}</h3>
                    <p>${ev.body}</p>
                    <button onclick="location.href='booking.html'">Book Now</button>
                </div>
            `).join('');
    }
}

// 5. BOOKING PAGE (Promise + setTimeout Simulation)
 
function initBookingPage() {
    const form = document.getElementById("bookingForm");
    const loadingSection = document.getElementById("loadingSection");
    const errorMsg = document.getElementById("errorMsg");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            id: Date.now(),
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            eventType: document.getElementById("eventType").value,
            eventDate: document.getElementById("eventDate").value
        };

        if (!formData.name || !formData.email || !formData.eventDate) {
            errorMsg.textContent = "⚠️ All fields are required!";
            return;
        }

        errorMsg.textContent = "";
        loadingSection.style.display = "flex"; 

        // Simulated "Server" save
        await new Promise(resolve => setTimeout(resolve, 1500));

        const db = getBookings();
        db.push(formData);
        saveBookings(db);

        loadingSection.style.display = "none";
        alert("Success! Saved to Browser Memory.");
        window.location.href = "dashboard.html";
    });
}

// 6. DASHBOARD PAGE
 
function initDashboardPage() {
    const container = document.getElementById("bookingContainer");
    const totalCount = document.getElementById("totalCount");
    const timerDisplay = document.getElementById("countdownTimer");
    const filterSelect = document.getElementById("filterEvent");
    const template = document.getElementById("bookingTemplate");

    const render = (filter = "all") => {
        if (!container) return;
        container.innerHTML = "";
        
        const bookings = getBookings();
        const filtered = filter === "all" ? bookings : bookings.filter(b => b.eventType === filter);
        
        if (totalCount) totalCount.textContent = filtered.length;

        filtered.forEach(booking => {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".event-name").textContent = booking.eventType;
            clone.querySelector(".user-name").textContent = booking.name;
            clone.querySelector(".event-date").textContent = formatDate(booking.eventDate);

            clone.querySelector(".delete-btn").addEventListener("click", () => {
                const updated = getBookings().filter(b => b.id !== booking.id);
                saveBookings(updated);
                render(filter);
            });

            container.appendChild(clone);
        });
    };

    setInterval(() => {
        if (timerDisplay) timerDisplay.textContent = new Date().toLocaleTimeString();
    }, 1000);

    if (filterSelect) {
        filterSelect.addEventListener("change", (e) => render(e.target.value));
    }

    render();
}