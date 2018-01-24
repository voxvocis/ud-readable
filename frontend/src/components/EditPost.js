import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/posts'
import '../styles/App.css';
import PostDialog from './PostDialog'

class EditPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: true,
    }
  }

  closeModal = () => {
    this.setState({
      openModal: false,
    })
    this.props.history.go(-1)
  }

  editPost = data => {
    const { postDetails, history, updatePost } = this.props
    updatePost(postDetails.id, data)
  }

  componentWillMount() {
    const id = this.props.match.params.id
    this.props.getPostsById(id)
  }

  render() {
    const { categories, postDetails } = this.props
    const { openModal } = this.state
    return (
      <div>
        {(postDetails.id === this.props.match.params.id) && (
          <PostDialog
            heading="Edit Post"
            open={this.state.openModal}
            closeModal={this.closeModal}
            categories={categories}
            editPost={this.editPost}
            edit={true}
            title={postDetails.title}
            message={postDetails.body}
            author={postDetails.author}
            categoryValue={postDetails.category}
          />
        ) }
      </div>
    )
  }
}

const mapStateToProps = ({ categories, postDetails }) => ({
  postDetails,
  categories: Object.values(categories),
})

export default withRouter(connect(mapStateToProps, actions)(EditPost))
