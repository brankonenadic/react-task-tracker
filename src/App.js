import { useState, useEffect} from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/AboutUs"

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

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
//add task
const addNewTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await res.json()

  setTasks([...tasks, data])


/*   const id = Math.floor(Math.random() * 100) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask]) */
 
}

// delete task 
    const deletetask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      })
      setTasks(tasks.filter((task) => task.id !== id))
    }
  // toggle reimainder

  const toggleReimainder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

 
return (
  <Router>
    <div className='container'>
      <Header
        onAdd={() => setShowTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Route
        path='/'
        exact
        render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addNewTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deletetask}
                onToggle={toggleReimainder}
              />
            ) : (
              'No Tasks To Show'
            )}
          </>
        )}
      />
      <Route path='/about' component={About} />
      <Footer />
    </div>
  </Router>
)
}
export default App;








