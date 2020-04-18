import React, { Fragment, Component } from "react"

class TimeBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockOne: null,
      blockTwo: null
    }
  }

  render() {
    const { type } = this.props
    return (
      <div>
        <p>{type}</p>
      </div>
    )
  }
}

export default TimeBlock