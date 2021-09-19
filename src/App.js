import { useState, useEffect} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])


  
  useEffect(() => {
   const getTasks = async () => {
     const taskFromServer = await fetchTasks()
     setTasks(taskFromServer)
   }
   getTasks()
  }, [])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
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
        <Header onAdd={() => setShowTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addNewTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReimainder} />) : ('No tasks to show!')} 
    </div>
  );
}

export default App;








