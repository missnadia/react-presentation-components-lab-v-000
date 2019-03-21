import React from 'react'

class SimpleComponent extends Component {
  
  state {
    mood: "happy"
  }
  
  handleClick = event => {
    this.setState
  }
  
  render() {
    return (
      <div
        onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent