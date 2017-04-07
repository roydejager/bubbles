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

  calculateDistance(e) {
    const { elementCoordTop, elementCoordLeft } = this.state

    this.setState({
      elementCoordTop: this.node.getBoundingClientRect().top,
      elementCoordLeft: this.node.getBoundingClientRect().left
    })

    this.setState({ distanceTop: Math.abs(elementCoordTop - e.clientY)})
    this.setState({ distanceLeft: Math.abs(elementCoordLeft - e.clientX) })

  }


  render() {
    const { distanceTop, distanceLeft } = this.state
    console.log(distanceLeft)
    return (
      <div onMouseMove={this.calculateDistance.bind(this)} className={styles.divider}>
         <div ref={e => this.node = e}className={styles.circle}>
           <div className={styles.top}>{distanceTop}</div>
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
    <Dot />
  )
}

export default Divider
