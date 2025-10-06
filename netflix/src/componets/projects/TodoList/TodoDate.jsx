import React, { useEffect, useState } from 'react'

export default function TodoDate() {
    const [formattedDateTime, setformattedDateTime] = useState("")

   useEffect(() => {
       const interval = setInterval(() => {
           const now = new Date();
           const formattedTime = now.toLocaleTimeString();
           const formattedDate = now.toLocaleDateString();
           setformattedDateTime(`${formattedDate} - ${formattedTime}`)

           return () => clearInterval(interval);
       }, 1000)
   }, [])
  return (
      <div>{formattedDateTime}</div> 
  )
}
