import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"
function App() {
  const [showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meating at School',
        day: 'Feb 5th at 4:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 6th at 5:30pm',
        reminder: false,
    }
])

//add task
const addNewTask = (task) => {
  const id = Math.floor(Math.random() * 100) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
 
}

// delete task 
    const deletetask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  // toggle reimainder
  const toggleReimainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task))
  }
  return (
    <div className="container">
        <Header onAdd={() => setShowTask(!showAddTask)} />
        {showAddTask && <AddTask onAdd={addNewTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReimainder} />) : ('No tasks to show!')} 
    </div>
  );
}

export default App;







