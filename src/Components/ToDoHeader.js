import React from 'react'

export default function ToDoHeader() {
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleString('en-us', dateOptions)
    return (
        <p>
          To Do List: {currentDate}
        </p>
    )
}
