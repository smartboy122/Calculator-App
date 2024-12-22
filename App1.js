// Importing React and ReactDOM
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Main App Component
function App() {
  // State to manage the list of tasks and the input value
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]); // Add the new task to the tasks array
      setInput(""); // Clear the input field
    }
  };

  return (
    <div style={{ margin: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>React To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Enter a task"
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 12px", fontSize: "16px" }}>
          Add Task
        </button>
      </div>
      <ul style={{ marginTop: "20px", fontSize: "18px" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Rendering the App Component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
