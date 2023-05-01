import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Doctors Appointment',
            day: 'May 5th',
            reminder: true
        },
        {
            id:2,
            text:'Meeting',
            day: 'May 6th',
            reminder: true
        },
        {
            id:3,
            text:'Shopping',
            day: 'May 7th',
            reminder: false
        }
    ]
)

//DELETE TASK
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

//TOGGLE REMINDER
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? 
        <Tasks  tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : 'No Tasks to show'
      }
    </div>
  );
}

export default App;
