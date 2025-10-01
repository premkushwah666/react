import './Ev.css'

export const EventHandling = () => {

    // function handleButtonClick(){
    //     alert('hey i am button click evenet')
    // }
    const handleButtonClick = (event) => {
        console.log(event)
        alert('hey i am button click evenet')
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click</button>
        </>
    )
}