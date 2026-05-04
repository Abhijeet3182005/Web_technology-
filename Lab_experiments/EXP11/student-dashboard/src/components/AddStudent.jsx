import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent({ students, setStudents }) {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter student name");
      return;
    }

    // Add new student
    setStudents([...students, name]);

    alert("Student Added Successfully!");

    setName("");

    // Redirect to list page
    navigate("/students");
  };

  return (
    <div className="container">
    <h2>Add Student</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
    </div>

  );
}

export default AddStudent;