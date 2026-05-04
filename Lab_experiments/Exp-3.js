//  getElementById
const title = document.getElementById("title");
console.log(title);
console.log(title.innerText);
console.log(title.innerHTML);

// querySelector
const firstH2 = document.querySelector("h2");
console.log(firstH2);

//  querySelectorAll
const allH2 = document.querySelectorAll("h2");
allH2.forEach((item) => {
    item.style.color = "lightgreen";
});

//  Change title when button clicked
const changeBtn = document.getElementById("changeTextBtn");

changeBtn.addEventListener("click", function () {
    title.innerHTML = "Abhijeet is Learning DOM 🚀";
});

// add new list item dynamically
const addBtn = document.getElementById("addItemBtn");
const myList = document.getElementById("myList");

addBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    newItem.classList.add("list-item");

    myList.appendChild(newItem);
});

//  Click on list item to remove it
myList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});