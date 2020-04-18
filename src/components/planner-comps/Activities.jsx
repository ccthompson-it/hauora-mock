import React, { Fragment, Component } from "react"
import Options from './Options'



class Activities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pillar: "physical"
    }
  }

  changePillar = (pillar) => {
    this.setState({
      pillar 
    })
  }

  render() {
    return (
      <Fragment>
        <button onClick={() => this.changePillar("physical")}>Physical</button>
        <button onClick={() => this.changePillar("mental")}>Mental</button>
        <button onClick={() => this.changePillar("spiritual")}>Spiritual</button>
        <button onClick={() => this.changePillar("social")}>Social</button>
        <Options pillar={this.state.pillar} />
      </Fragment>
    )
  }

}

export default Activities