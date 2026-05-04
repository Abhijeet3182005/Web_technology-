let students = [];

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(function(name, index) {
        const li = document.createElement("li");
        li.textContent = name;

        // Event to remove student on click
        li.addEventListener("click", function() {
            removeStudent(index);
        });

        list.appendChild(li);
    });
}


function addStudent() {
    const input = document.getElementById("studentName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a name");
        return;
    }

    students.push(name);
    input.value = "";

    displayStudents();
}


function removeStudent(index) {
    students.splice(index, 1);
    displayStudents();
}


document.getElementById("addBtn")
        .addEventListener("click", addStudent);