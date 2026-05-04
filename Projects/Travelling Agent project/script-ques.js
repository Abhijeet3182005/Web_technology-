function saveAnswers() {
  let budget = document.getElementById("budget").value;
  let interest = document.getElementById("interest").value;
  let type = document.getElementById("type").value;

  if(budget === "" || budget <= 0){
    alert("Please enter a valid budget");
    return;
  }

  // Save answers
  localStorage.setItem("budget", budget);
  localStorage.setItem("interest", interest);
  localStorage.setItem("type", type);

  window.location.href = "countries.html";
}

window.onload = () => {
  let name = localStorage.getItem("username");
  let text = "Hello " + name + " 👋";

  let i = 0;
  let el = document.getElementById("userWelcome");
  el.innerHTML = "";

  function typing() {
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 80);
    }
  }

  typing();
};

