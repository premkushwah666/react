import { useState } from 'react'
import './MyTodoList.css'

export default function MyTodoList() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task)
    console.log(tasks)
    setTasks(tasks.push({
      task
    }));
    console.log(tasks);
    
  }

  return (
    <div className='todo-container'>
      <div>Todo List</div>

      {/* form */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button> Add Task </button>
      </form>


    </div>
  )
}


