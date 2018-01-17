import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  getPosts,
  postVote,
} from '../actions'
import '../styles/App.css';
import Post from './Post'

class Home extends Component {

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, categories } = this.props
    const { category } = this.props.match.params
    return (
      <div className="Posts">
        {posts.filter(post => {
            if (category) {
              return post.category === category
            } else {
              return true
            }
          })
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
    )
  }
}

const mapStateToProps = ({ posts, categories }) => ({
    posts: Object.values(posts),
    categories: Object.values(categories),
  })


const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  postVote: (id, option) => dispatch(postVote(id, option)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
