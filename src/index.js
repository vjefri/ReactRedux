import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Keys from './secret/apikey.js'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: Keys.google, term: term}, (videos) => {
      this.setState({
          videos: videos,
          selectedVideo: videos[0]
      })
    })
  }
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    )
  }
}

// take this components generated HTML and put it on the page
// NOTE: we must create an instance of a component
// NOTE: always one component per file
ReactDOM.render(<App />, document.querySelector('.container'))
