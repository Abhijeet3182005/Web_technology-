import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import './App.css'
function App() {

  // State
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/students" 
          element={<StudentList students={students} />} 
        />

        <Route 
          path="/add" 
          element={
            <AddStudent 
              students={students} 
              setStudents={setStudents} 
            />
          } 
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;