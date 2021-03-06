import React from 'react'
import Icon from 'react-icons-kit'
import { heart } from 'react-icons-kit/icomoon/heart'
import { heartBroken } from 'react-icons-kit/icomoon/heartBroken'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

export default function Post({ id, title, author, score, comments, date, dispatchVote, category, deletePost, editPost }) {

  const upVote = () => {
    dispatchVote(id, 'upVote')
  }
  const downVote = () => {
    dispatchVote(id, 'downVote')
  }

  const deleteIt = () => {
    deletePost(id)
  }

  return (
    <div className="Post-container">
      <div className="Post-score">
        <button type="button" className="Post-score-vote" onClick={upVote}>
          <Icon icon={heart}/>
        </button>
        <button type="button" className="Post-score-vote" onClick={downVote}>
          <Icon icon={heartBroken} />
        </button>
        <div className="Post-score-value">Score: { score }</div>
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
          { (new Date(date)).toGMTString() }
        </div>
      </div>
      <div className="Post-comments-container">
        <div className="Post-comments">
          No. of comments: {comments}
        </div>
      </div>
      <div className="Post-action-buttons">
        <Link to={`/edit-post/${id}`}>
          <RaisedButton
            label="Edit"
            backgroundColor="#ff9800"
            labelColor="#fff"
          />
        </Link>
        <RaisedButton
          label="Delete"
          backgroundColor="#ff9800"
          labelColor="#fff"
          onClick={deleteIt}
        />
      </div>
    </div>
  )
}
