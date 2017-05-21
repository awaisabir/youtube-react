import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      term: 'Starting Value' 
    }
  }

  render() {

    return(
      <div>
        {/* bind input value to the state */}
        <input 
          value = {this.state.term} 
          onChange={event => this.setState({ term: event.target.value })} 
        />
        <div>{this.state.term}</div>
      </div>
    )
  }
}

export default Search