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
    const { pillar } = this.state
    return (
      <Fragment>
        <p id="watermark">Drag From Here...</p>
        <div className="category-box">
          <button className={pillar === "physical" ? "category-button active-button" : "category-button"} onClick={() => this.changePillar("physical")}>Physical</button>
          <button className={pillar === "mental" ? "category-button active-button" : "category-button"} onClick={() => this.changePillar("mental")}>Mental</button>
          <button className={pillar === "spiritual" ? "category-button active-button" : "category-button"} onClick={() => this.changePillar("spiritual")}>Spiritual</button>
          <button className={pillar === "social" ? "category-button active-button" : "category-button"} onClick={() => this.changePillar("social")}>Social</button>
        </div>
        <Options pillar={this.state.pillar} />
      </Fragment>
    )
  }

}

export default Activities