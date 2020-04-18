import React, { Fragment } from "react"
import Day from './Day'

const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function makeDays() {
  let days = []
  for (let i = 0; i < 7; i++) {
    days.push(<Day day={dayOrder[i]} />)
  }
  return days
}

function Schedule() {
  return (
    <div>
      {makeDays()}
    </div>
  )
}

export default Schedule