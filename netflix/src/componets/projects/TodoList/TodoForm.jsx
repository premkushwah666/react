import { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (value) => {
        setInputValue(value)
        // console.log(value);
    }

    const handleFormSubmit = (event) => {
        if (!inputValue) return;
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("")
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button> Add Task </button>
            </form>
        </>
    )
}
