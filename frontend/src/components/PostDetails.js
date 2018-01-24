import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import Icon from 'react-icons-kit'
import { heart } from 'react-icons-kit/icomoon/heart'
import { heartBroken } from 'react-icons-kit/icomoon/heartBroken'
import RaisedButton from 'material-ui/RaisedButton'
import '../styles/App.css';

class PostDetails extends Component {

  componentWillMount() {
    const id = this.props.match.params.post_id
    this.props.getPostsById(id)
    this.props.getCommentsByPostId(id)
  }

  upVote = () => {
    this.props.postVote(this.props.match.params.post_id, 'upVote')
  }

  downVote = () => {
    this.props.postVote(this.props.match.params.post_id, 'downVote')
  }

  commentUpVote = id => {
    this.props.upVoteComment(id, this.props.match.params.post_id, 'upVote')
  }

  commentDownVote = id => {
    this.props.upVoteComment(id, this.props.match.params.post_id, 'downVote')
  }

  deleteIt = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    const { post, comments } = this.props
    const { voteScore, title, author, timestamp, body, commentCount, category, id} = post
    return (
      <div className="Posts">
        <div className="Post-detail-container">
          <div className="Post-score">
            <button type="button" className="Post-score-vote" onClick={this.upVote}>
              <Icon icon={heart}/>
            </button>
            <button type="button" className="Post-score-vote" onClick={this.downVote}>
              <Icon icon={heartBroken} />
            </button>
            <div className="Post-score-value">Score: { voteScore }</div>
          </div>
          <div className="Post-title">
          <Link to={`/${category}/${id}`}>
            { title }
          </Link>
          </div>
          <div>
            <div className="Post-author">
              { author }
            </div>
          </div>
          <div className="Post-date-container">
            <div className="Post-date">
              { (new Date(timestamp)).toGMTString() }
            </div>
          </div>
          <div className="Post-detail-body">
            {body}
          </div>
          <div className="Post-comments-container">
            <div className="Post-detail-commentCount">
              No. of comments: {commentCount}
            </div>
          </div>
          <div className="Post-action-buttons">
            <Link to={`/edit-post/${id}`}>
              <RaisedButton
                label="Edit"
                backgroundColor="#0099"
                labelColor="#fff"
              />
            </Link>
            <RaisedButton
              label="Delete"
              backgroundColor="#0099"
              labelColor="#fff"
              onClick={this.deleteIt}
            />
          </div>
        </div>
        <div className="Post-detail-comments" >
          <div className="Post-comment-wrapper">
            Comments:
          </div>
        {comments.map(comment => (
          <div className="Comment-container" key={comment.id}>
            <div className="Post-score">
              <button type="button" className="Post-score-vote" onClick={() => (this.commentUpVote(comment.id))}>
                <Icon icon={heart}/>
              </button>
              <button type="button" className="Post-score-vote" onClick={() => (this.commentDownVote(comment.id))}>
                <Icon icon={heartBroken} />
              </button>
              <div className="Post-score-value">Score: { comment.voteScore }</div>
            </div>
            <div className="Comment-title">
             title
            </div>
            <div>
              <div className="Post-author">
                { comment.author }
              </div>
            </div>
            <div className="Post-date-container">
              <div className="Post-date">
                { (new Date(comment.timestamp)).toGMTString() }
              </div>
            </div>
            <div className="Post-detail-comment-body">
              {comment.body}
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ postDetails, comments }) => ({
    post: postDetails,
    comments: Object.values(comments)
  })

export default withRouter(connect(mapStateToProps, actions)(PostDetails))
