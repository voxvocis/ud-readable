import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../actions'
import '../App.css';
import Post from './Post'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    const { posts, categories } = this.props
    return (
      <div className="Container">
        <header className="Container-header">
          <h1 className="Container-title">Readable</h1>
        </header>
        <div className="Categories">
          {categories.map(category => (
            <li key={category.name}>
              <p> {category.path} </p>
            </li>
          ))}
        </div>
        <div className="Top-bar">

        </div>
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
            />
          ))}
        </div>
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
  fetchPosts: () => dispatch(fetchPosts()),
  fetchCategories: () => dispatch(fetchCategories()),
})

// When you connect a component, that component will automatically be passed Redux's dispatch() method.
// What that means is that if you want to dispatch an action
export default connect(mapStateToProps, mapDispatchToProps)(App)
