import React, { Component, Fragment } from "react"

import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import Header from '../components/Header'
import Schedule from '../components/planner-comps/Schedule'
import DragBox from '../components/planner-comps/DragBox'


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
        <DndProvider backend={Backend}>
          <div className="planner-box">
            <DragBox text="Walk the Dog" />
            <div className="schedule-box">
              <h1>This is the Planner!</h1>
              <Schedule />
            </div>
          </div>
        </DndProvider>
      </Fragment>
    )
  }
}

export default Homepage