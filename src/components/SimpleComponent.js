import React from 'react'

class SimpleComponent extends Component {
  
  state {
    mood: "happy"
  }
  
  handleClick = event => {
    
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