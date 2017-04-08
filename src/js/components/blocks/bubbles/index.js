import React from 'react';
import styles from './style.css'

class Dot extends React.Component {
  constructor() {
    super()
    this.state = {
      distanceTop: 0,
      distanceLeft: 0,
      elementCoordTop: 0,
      elementCoordLeft: 0
    }
  }

  componentDidMount() {

    this.setState({
      elementCoordTop: this.node.getBoundingClientRect().top,
      elementCoordLeft: this.node.getBoundingClientRect().left
    })
  }

  resetPosition() {
    this.setState({
      distanceTop: 0,
      distanceLeft: 0
    })
  }

  calculateDistance(e) {
    const { elementCoordTop, elementCoordLeft, distanceTop, distanceLeft } = this.state

    if (distanceLeft <= 40 || distanceTop <= 40) {
      this.setState({ distanceTop: Math.abs(elementCoordTop - e.clientY)})
      this.setState({ distanceLeft: Math.abs(elementCoordLeft - e.clientX) })
    } else {
      this.resetPosition()
    }
  }


  render() {
    const { distanceTop, distanceLeft } = this.state
    return (
      <div onMouseLeave={this.resetPosition.bind(this)} onMouseMove={this.calculateDistance.bind(this)} className={styles.bubble}>
         <div style={{ top: `${distanceTop}px`, left: `${distanceLeft}px`}} ref={ e => this.node = e } className={styles.circle}>
           <div  className={styles.top}>{distanceTop}</div>
           <div className={styles.left}>{distanceLeft}</div>
         </div>
      </div>
    )
  }
}

function Divider() {

  // const renderDots = array.map(item, index => {
  //   <Dot {...item} />
  // })

  return (
    <div className={styles.divider}>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </div>
  )
}

export default Divider
