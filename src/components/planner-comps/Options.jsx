import React, { Fragment, Component } from "react"

import DragBox from './DragBox'


let options = {
  physical: ["Run", "Bike"],
  mental: ["Read a Book", "Study"],
  spiritual: ["Meditate", "Yoga"],
  social: ["Call a Friend", "Visit Family"]
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
    if (this.state.activity.replace(/\s/g,"") !== "") {
      options[this.props.pillar].push(this.state.activity)
      this.setState({
        activity: ""
      })
    }
  }

  render() {
    const { pillar } = this.props
    const { activity } = this.state
    const currentOptions = options[pillar]

    return (
      <Fragment>
        <div className="input-box">
          <input type="text" placeholder="Add Your Own..." value={activity} onChange={this.handleChange} />
          <button onClick={this.handleSubmit} className="submit-button">Add</button>
        </div>
        <div className="options-box">
          {currentOptions.map((option, i) => { return <DragBox text={option} key={i} /> })}
        </div>
      </Fragment>
    )
  }
}

export default Options