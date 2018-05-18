import React, { Component } from 'react'

class Card extends Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    let direction = this.props.up ? 'up' : 'down'
    if (direction === 'up') {
      return <img src={this.props.value} className={`card ${direction}`} />
    } else if (direction === 'down') {
      return <img src='https://s-media-cache-ak0.pinimg.com/236x/9a/3a/e2/9a3ae2e10d5b196b0a228ca00f8219fc.jpg' 
        onClick={this.handleClick} 
        className={`card ${direction}`} 
      />
    } else {
      return <img src='https://s-media-cache-ak0.pinimg.com/236x/9a/3a/e2/9a3ae2e10d5b196b0a228ca00f8219fc.jpg' 
        onClick={this.handleClick} 
        className={`card ${direction}`} 
      />
    }
  }
}

export default Card