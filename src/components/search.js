import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      term: '' 
    }
  }

  render() {

    return(
      <div className="search-bar">
        {/* bind input value to the state */}
        <input 
          value = {this.state.term} 
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default Search