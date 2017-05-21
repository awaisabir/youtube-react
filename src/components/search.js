import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
  render() {
    return(
      <div>
        <input  onChange={this.onInputChange} />
      </div>
    )
  }

  onInputChange(e) {
    console.log(e.target.value)
  }
}

export default Search