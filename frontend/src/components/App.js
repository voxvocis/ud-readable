import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/App.css';
import Home from './Home'
import TopBar from './TopBar'
import PostDetails from './PostDetails'
import EditPost from './EditPost'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <TopBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:category' component={Home}/>
          <Route exact path="/edit-post/:id" component={EditPost} />
          <Route exact path="/:category/:post_id" component={PostDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const NotFound = () => {
  return <div><h1>Not found</h1></div>
}

export default withRouter(connect()(App))
