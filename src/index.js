import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Search from './components/search'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyC0_-tUXn2boMny9ENUehTqxDAmXv2RHvM'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : []
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <Search />,
      <VideoList videos={this.state.videos} />
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))