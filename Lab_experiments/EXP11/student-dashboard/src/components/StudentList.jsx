function StudentList({ students }) {
  return (
    <div className="container">
    <h2>Student List</h2>

    {students.length === 0 ? (
      <p>No students added yet</p>
    ) : (
      <ul>
        {students.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    )}
  </div>
  );
}

export default StudentList;