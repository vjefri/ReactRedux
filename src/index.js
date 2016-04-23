import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import Keys from './secret/apikey.js'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
// create a new component // a component is just a function
// this component should produce some HTML
// we create a class component
// parent component must fetch data


class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: Keys.google, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

// take this components generated HTML and put it on the page
// NOTE: we must create an instance of a component
// NOTE: always one component per file
ReactDOM.render(<App />, document.querySelector('.container'))
