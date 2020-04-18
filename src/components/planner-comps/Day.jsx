import React, { Fragment } from "react"
import TimeBlock from './TimeBlock'

function Day(props) {
  let { day } = props
  return (
    <div>
      <h2>{day}</h2>
      <TimeBlock type="Morning" />
      <TimeBlock type="Midday" />
      <TimeBlock type="Afternoon" />
      <TimeBlock type="Evening" />
    </div>
  )
}

export default Day