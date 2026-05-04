function startJourney() {
  let name = document.getElementById("username").value;

  if(name === "") {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("username", name);
  window.location.href = "questions.html";
}

// Typing Animation
window.addEventListener("load", () => {
  let text = "Welcome Traveler ✨";
  let i = 0;
  let el = document.getElementById("welcome");

  el.innerHTML = "";

  function typing() {
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }

  typing();
});