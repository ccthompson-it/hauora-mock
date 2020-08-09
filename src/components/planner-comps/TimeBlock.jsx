import React, { Component } from "react"
import DropBox from './DropBox'

class TimeBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockOne: null,
      blockTwo: null
    }
  }

  changeText = (blockId, text) => {
    this.setState({
      [blockId]: text
    })
  }

  removeText = (blockId) => {
    this.setState({
      [blockId]: null
    })
  }

  render() {
    const { type } = this.props
    const { blockOne, blockTwo } = this.state
    return (
      <div className="time-block">
        <p className="time-block-name">{type}</p>
        <DropBox boxId={"blockOne"} boxText={blockOne} changeText={this.changeText} removeText={this.removeText}/>
        <DropBox boxId={"blockTwo"} boxText={blockTwo} changeText={this.changeText} removeText={this.removeText}/>
      </div>
    )
  }
}

export default TimeBlock