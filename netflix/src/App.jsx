import './App.css'
import { EventHandling } from './componets/EventHandling/EventHandling'
import { LiftState } from './componets/liftStateUp/LiftStateUp'
import NetflixSeries from './componets/NetflixSeries'
import MyTodoList from './componets/projects/MyTodoList/MyTodoList'
import Todo from './componets/projects/TodoList/Todo'
import ToggleSwitch from './componets/projects/toggleSwitch/toggleSwitch'


function App() {

  return (
  <section className='container'>
    {/* <h1 className='card-heading'> List of Netflix Series </h1> */}
    {/* <EventHandling />  */}
    {/* <NetflixSeries /> */}
    {/* <LiftState/> */}
    {/* <ToggleSwitch/> */}
    {/* <MyTodoList/> */}
    <Todo/>
  </section>
  )
}

export default App



// import './App.css'
// import NetflixSeries from './componets/NetflixSeries'
// import Profile from './componets/Profile'

// function App() {

  

//   return <Profile
//     name="prem"
//     age={21}
//     greeting={
//       <div>
//         <h2>Good Morning...</h2>
//       </div>
//     }
//   >
//     <p>body of profile (**)</p>
//     <h3>How are you</h3>
//   </Profile>
// }

// export default App

