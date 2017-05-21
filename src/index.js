import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/search'

const API_KEY = 'AIzaSyC1ueyz1xHHAoSMjTJZWQJOe-fPZO-N9iQ'

const App = () => {
    return (
      <div>
        <Search />
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))