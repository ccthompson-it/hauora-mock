import React, { Fragment } from "react"

import DragBox from './DragBox'


const options = {
  physical: ["physical 1", "physical 2"],
  mental: ["mental 1", "mental 2"],
  spiritual: ["spiritual 1", "spiritual 2"],
  social: ["social 1", "social 2"]
}

function Options(props) {
  const { pillar } = props
  const currentOptions = options[pillar]

  return (
    <Fragment>
      {currentOptions.map((option, i) => { return <DragBox text={option} key={i}/> })}
    </Fragment>
  )
}

export default Options