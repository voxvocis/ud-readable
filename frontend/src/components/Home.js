import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/posts'
import '../styles/App.css';
import Post from './Post'
import PostDialog from './PostDialog'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
      editId: null,
    }
  }

  closeModal = () => {
    this.setState({
      openModal: false,
    })
  }

  editPost = id => {
    this.props.getPostsById(id)
      .then(
        this.setState({
          editId: id,
          openModal: true,
        })
      )
  }

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, filter } = this.props
    const { category } = this.props.match.params
    const { openModal } = this.state
    return (
      <div>
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
                  deletePost={this.props.deletePost}
                  editPost={this.editPost}
                />
              ))
            }
        </div>
        {openModal && (
          <PostDialog
            open={this.state.openModal}
            closeModal={this.closeModal}
            categories={this.props.categories}
            createPost={this.props.addPost}
            edit={true}
            postID={this.state.editId}
            title={this.props.postDetails.title}
          />
        ) }
      </div>
    )
  }
}

const mapStateToProps = ({ posts, filter, categories, postDetails }) => ({
  posts: Object.values(posts),
  postDetails,
  filter,
  categories: Object.values(categories),
})

export default withRouter(connect(mapStateToProps, actions)(Home))
