import React, { Component } from 'react'
import 'react-rangeslider/lib/index.css'
import Slider from 'react-rangeslider'
 
class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
  render() {
    let { volume } = this.state
    return (
      <Slider
        value={volume}
        onChange={this.handleOnChange}
      />
    )
  }
}

export default VolumeSlider
