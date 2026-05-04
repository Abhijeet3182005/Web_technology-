import { useState } from 'react'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student Info</h1>

      <button onClick={showMessage}>
        Click Me
      </button>

      
      <Student name="Abhijeet" age="20" course="AIML" />
    </>
  )
}

export default App