import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
    // this.props.fetchCommetns();
  }

  render() {
    return (
      <div className="Container">
        <header className="Container-header">
          <h1 className="Container-title">Heading</h1>
        </header>
      <div className="Top-bar">

      </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// this.props.dispatch(updateName(this.state.name)) E.g.
// mapDispatchToProps() can clean up the code above just a bit.
// The whole point of mapDispatchToProps() is to make it so you can bind dispatch() to your action creators before they ever hit your componen
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
    //fetchComments: data => dispatch(fetchComments(data)),
})

// When you connect a component, that component will automatically be passed Redux's dispatch() method.
// What that means is that if you want to dispatch an action
export default connect(null, mapDispatchToProps)(App)
