import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Dashboard</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/add">Add Student</Link>
      </div>
    </nav>
  );
}

export default Navbar;