import React, { Fragment, Component } from "react"

import DragBox from './DragBox'


let options = {
  physical: ["physical 1", "physical 2"],
  mental: ["mental 1", "mental 2"],
  spiritual: ["spiritual 1", "spiritual 2"],
  social: ["social 1", "social 2"]
}

class Options extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      activity: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.props.pillar, this.state.activity)
    options[this.props.pillar].push(this.state.activity)
    this.setState({
      activity: ""
    })
  }

  render() {
    const { pillar } = this.props
    const { activity } = this.state
    const currentOptions = options[pillar]

    return (
      <Fragment>
        <input type="text" placeholder="Add Your Own..." value={activity} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>+</button>
        {currentOptions.map((option, i) => { return <DragBox text={option} key={i} /> })}
      </Fragment>
    )
  }
}

export default Options