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
    console.log(blockId, text)
    this.setState({
      [blockId]: text
    })
  }

  render() {
    const { type } = this.props
    const { blockOne, blockTwo } = this.state
    return (
      <div>
        <p>{type}</p>
        <DropBox boxId={"blockOne"} boxText={blockOne} changeText={this.changeText}/>
        <DropBox boxId={"blockTwo"} boxText={blockTwo} changeText={this.changeText}/>
      </div>
    )
  }
}

export default TimeBlock