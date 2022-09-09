import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'


function App() {
  const [tasks, setTasks] = useState([])
  //se va a ejecutar cuando carge el componente
  useEffect(() => {
    // se cargara el array
    setTasks(data);
  }, [])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description 
    }])
  }

  return (
    <>
      <TaskForm createTask={createTasks} />
      <TaskList tasks={tasks} />
    </>
  )
}
export default App
