import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions/posts'
import '../styles/App.css';
import PostDialog from '../components/PostDialog'
const R = require('ramda')

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
    updatePost(postDetails.details.id, data)
  }

  componentWillReceiveProps(nextProps) {
    const { postDetails } = this.props
    if (postDetails.deleted && R.isEmpty(nextProps.postDetails.details)) {
      this.props.history.push('/404')
    }
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
        {(postDetails.details.id === this.props.match.params.id) && (
          <PostDialog
            heading="Edit Post"
            open={this.state.openModal}
            closeModal={this.closeModal}
            categories={categories}
            editPost={this.editPost}
            edit={true}
            title={postDetails.details.title}
            message={postDetails.details.body}
            author={postDetails.details.author}
            categoryValue={postDetails.details.category}
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
