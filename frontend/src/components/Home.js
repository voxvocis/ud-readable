import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/posts'
import '../styles/App.css';
import Post from './Post'

class Home extends Component {

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, filter } = this.props
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
            .sort((a, b) => {
              if (filter.score) {
                return b.voteScore - a.voteScore
              } else if (filter.date) {
                return b.timestamp - a.timestamp
              } else {
                0
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

const mapStateToProps = ({ posts, filter }) => ({
  posts: Object.values(posts),
  filter,
})

export default withRouter(connect(mapStateToProps, actions)(Home))
