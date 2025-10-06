import { FaCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function TodoList({ id, data, onDeleteTodo }) {

    return (
        <div>
            <li key={id} className='todo-item'>
                <span>{data}</span>
                <button className='check-btn' >
                    <FaCircleCheck />
                </button>
                <button className='delete-btn' onClick={() => onDeleteTodo(data)}>
                    <MdDelete />
                </button>
            </li>
        </div>
    )
}


