import React, { Component, Fragment } from "react"

import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import DragDropBox from '../components/DragDropBox'
import Header from '../components/Header'


function makeDragDrops(emptyPos, changePosition) {
  let empty
  let boxes = []
  for (let i = 0; i < 2; i++) {
    empty = i === emptyPos ? true : false
    boxes.push(<DragDropBox id={i} empty={empty} changePosition={changePosition} key={i} />)
  }
  return boxes
}

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emptyPos: 0
    }
  }

  changePosition = (newPos) => {
    this.setState({
      emptyPos: newPos
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="center">
          <h1>This is the Planner!</h1>
          <DndProvider backend={Backend}>
            <div className="dnd-box">
              {makeDragDrops(this.state.emptyPos, this.changePosition)}
            </div>
          </DndProvider>
        </div>
      </Fragment>
    )
  }
}

export default Homepage