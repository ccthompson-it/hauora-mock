import React from "react"
import Day from './Day'

const dayOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
/* Will be changed to be dynamic */

function makeDays() {
  let days = []
  for (let i = 0; i < 7; i++) {
    days.push(<Day day={dayOrder[i]} key={i} />)
  }
  return days
}

function Schedule() {
  return (
    <React.Fragment>
      <p id="schedule-watermark">...Drop Here</p>
      <div className="week-box">
        {makeDays()}
      </div>
    </React.Fragment>
  )
}

export default Schedule