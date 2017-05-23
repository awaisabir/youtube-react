import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Search from './components/search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyC0_-tUXn2boMny9ENUehTqxDAmXv2RHvM'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <Search />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={video => this.setState({selectedVideo: video})}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))