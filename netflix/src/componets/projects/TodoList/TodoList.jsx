import { useEffect, useState } from 'react'
import './TodoList.css'
import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function TodoList() {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    const [formattedDateTime, setformattedDateTime] = useState("")

    useEffect( ()=> {
        const interval = setInterval(()=>{
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        const formattedDate = now.toLocaleDateString();
        setformattedDateTime(`${formattedDate} - ${formattedTime}`)

        return ()=> clearInterval(interval);
    },1000)
    },[])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("")
            alert("value already exists")
            return
        }

        // currect state ko chodke previous states ko bhi access kr sakte h 
        // setTask((prevTask)=> {
        //     console.log(prevTask)
        //     return [...prevTask,inputValue]
        // })
        // setTask((prev) => [...prev, inputValue]);

        // working perfectly fine
        // array.push array ki lenght return krta h 

        // hence according to me (prev me task hi pass hota h)
        setTask(
            [...task, inputValue]
        )

        setInputValue("")
    }

    const handleInputChange = (value) => {
        setInputValue(value)
        console.log(value);
    }

    const handleDelete = (index) => {
        // rerender nhi ho rha tha bcoz prev state and curent state is same
        // task.splice(index,index+1) 
        // console.log(task);
        // setTask(task)
        setTask(task.filter((_,i)=> i!=index))
    }

    return (
        <div className='todo-container'>
            <div>Todo List</div>
            <div>{formattedDateTime}</div>

            {/* form */}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button> Add Task </button>
            </form>

            {/* list all the tasks */}

            {
                task.map((cur, index) => {
                    return <li key={index} className='todo-item'>
                        <span>{cur}</span>
                        <button className='check-btn' >
                            <FaCircleCheck />
                        </button>
                        <button className='delete-btn' onClick={() => handleDelete(index)}>
                            <MdDelete />
                        </button>
                    </li>
                })
            }

            <button className='button' onClick={()=> setTask([])}>Clear All</button>

        </div>
    )
}


