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
  console.log('delete', id)
}
  return (
    <div className="container">
      <Header />
      <Tasks  tasks = {tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
