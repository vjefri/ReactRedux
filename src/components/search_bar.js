import React, { Component } from 'react'

// plan JS object
// add methods and values
// class based component
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)}/>
  }
}

export default SearchBar
