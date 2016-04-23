import React from 'react'
import ReactDOM from 'react-dom'
import Keys from './secret/apikey.js'
// create a new component // a component is just a function
// this component should produce some HTML
// we create a class component
const App = () => {
  return <div>Hi!</div>
}

// take this components generated HTML and put it on the page
// NOTE: we must create an instance of a component
// NOTE: always one component per file
ReactDOM.render(<App />, document.querySelector('.container'))
