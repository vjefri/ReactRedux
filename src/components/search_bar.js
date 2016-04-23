import React, { Component } from 'react'

// plan JS object
// add methods and values
// class based component
// only class based components have state, functional do not have state
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })}/>
        Value of the input: {this.state.term}
      </div>
    )
  }
}

export default SearchBar
