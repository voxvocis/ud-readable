import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/App.css';
import Post from './Post'
import Home from './Home'
import TopBar from './TopBar'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <TopBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:category' component={Home}/>
          <Route path="/posts/:id" exact component={NotFound} />
          <Route path="/add-post" exact component={NotFound} />
          <Route path="/edit-post/:id" exact component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const NotFound = () => {
  return <div>Not found</div>;
};

export default withRouter(App)
