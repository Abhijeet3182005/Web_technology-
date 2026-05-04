 

document.addEventListener("DOMContentLoaded", function () {

    const result = document.getElementById("result");
    const btn = document.getElementById("calculateBtn");

    btn.addEventListener("click", calculateScore);

    function calculateScore() {

        let selectedDate = document.getElementById("todayDate").value;

        if (!selectedDate) {
            result.innerText = "Please sele+ct today's date";
            return;
        }

        let study = parseFloat(document.getElementById("study").value) ;
        let play = parseFloat(document.getElementById("play").value) ;
        let classTime = parseFloat(document.getElementById("class").value) ;
        let learning = parseFloat(document.getElementById("learning").value) ;
        let timepass = parseFloat(document.getElementById("timepass").value) ;

        let totalHours = study + play + classTime + learning + timepass;

        if (totalHours > 24) {
            result.innerText = "Total hours cannot exceed 24";
            return;
        }

        result.innerText = "Calculating your productivity please wait";

        setTimeout(function () {

            let dateObj = new Date(selectedDate);
            let dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });

            let productivity = study + classTime + learning;
            let healthy = play;
            let unproductive = timepass;

            let score = (productivity * 1) + (healthy * 0.5) - (unproductive * 1);

            if (score < 0) score = 0;

            let scorePercentage = (score / 24) * 100;

            let feedback = "";

            if (scorePercentage >= 75) {
                feedback = "Excellent You are very productive";
            } else if (scorePercentage >= 50) {
                feedback = "Good job You are on the right path";
            } else if (scorePercentage >= 30) {
                feedback = "Not bad Increase study or learning time";
            } else {
                feedback = "Small improvements daily lead to big success";
            }

            result.innerText =
                selectedDate + " (" + dayName + ")" +
                "\nScore: " + scorePercentage.toFixed(2) + "%" +
                "\n\n" + feedback;

        }, 1000);
    }

});

