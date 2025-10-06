import { useState } from 'react'

export default function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState({})

    const handleInputChange = (value) => {
        // setInputValue(value)
        setInputValue({
            id: value,
            content: value,
            check: false
        })
        console.log(inputValue);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.content) return;
        onAddTodo(inputValue);
        setInputValue({
            id: "",
            content: "",
            check: false
        })
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue?.content}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button> Add Task </button>
            </form>
        </>
    )
}
