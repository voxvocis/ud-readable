import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  getPosts,
  getCategories,
  postVote,
} from '../actions'
import '../App.css';
import Post from './Post'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts();
    this.props.getCategories();
  }

  render() {
    const { posts, categories } = this.props
    return (
      <div className="Container">
        <header className="Container-header">
          <Link to="/">
            <h1 className="Container-title">Readable</h1>
          </Link>
        </header>
        <div className="Categories">
          <ul>
            {categories.map(category => (
              <li key={category.name}>
                <Link
                  className='category'
                  to={'/' + category.path}
                ><p>{category.path} </p></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="Top-bar">
          <div className="Filter">
            Filter
          </div>
          <div className="New-post">
            <Link to="/#">
              New Post
            </Link>
          </div>
        </div>
        <Route exact path='/' render={() => (
          <div className="Posts">
            {posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                date={post.timestamp}
                title={post.title}
                body={post.body}
                author={post.author}
                category={post.category}
                score={post.voteScore}
                comments={post.commentCount}
                dispatchVote={this.props.postVote}
              />
            ))}
          </div>
        )} />
        {categories.map(category => (
          <Route key={category.path} exact path={'/' + category.path} render={() => (
            <div className="Posts">
              {posts
                .filter(post => (
                  post.category === category.path
                ))
                .map(post => (
                  <Post
                    key={post.id}
                    id={post.id}
                    date={post.timestamp}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    category={post.category}
                    score={post.voteScore}
                    comments={post.commentCount}
                    dispatchVote={this.props.postVote}
                  />
                ))
              }
            </div>
          )} />
        ))}
      </div>
    )
  }
}

// mapStateToProps(state, [ownProps]) ownProps is optional
// NOTE: we are reformatting the data to be an array of Objects so we can map over it and put it in thw view
const mapStateToProps = ({ posts, categories }) => ({
    posts: Object.values(posts),
    categories: Object.values(categories),
  })


// this.props.dispatch(updateName(this.state.name)) E.g.
// mapDispatchToProps() can clean up the code above just a bit.
// The whole point of mapDispatchToProps() is to make it so you can bind dispatch() to your action creators before they ever hit your component
const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  getCategories: () => dispatch(getCategories()),
  postVote: (id, option) => dispatch(postVote(id, option)),
})

// When you connect a component, that component will automatically be passed Redux's dispatch() method.
// What that means is that if you want to dispatch an action
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
