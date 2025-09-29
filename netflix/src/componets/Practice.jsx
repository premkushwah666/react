import React from 'react'

export default function Practice() {
    const students = []; 
    // const students = [1]; 

  return (
    <div>
        <p> number of students : {students.length} </p>
        <p>{ students.length===0 && "no students found"} </p> 
        <p>{ !students.length && "no students found"} </p> 
        <p>{ Boolean(!students.length) && "no students found"} </p> 
    </div>
  )
}
