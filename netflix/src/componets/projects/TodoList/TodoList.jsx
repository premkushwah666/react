import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function TodoList({ data, onDeleteTodo, check, handleCheck }) {

    return (
        <div>
            <li key={data} className='todo-item'>
                <span className={check ? 'not-check' : 'check'} > {data} </span>
                <button className='check-btn' onClick={() => handleCheck(data)}>
                    <FaCircleCheck />
                </button>
                <button className='delete-btn' onClick={() => onDeleteTodo(data)}>
                    <MdDelete />
                </button>
                {/* <button className='delete-btn' onClick={() => handleCheck(data)}>
                    <MdDelete />
                </button> */}
            </li>
        </div>
    )
}


