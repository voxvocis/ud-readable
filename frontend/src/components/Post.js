import React from 'react'

export default function Post({ title, author, score, comments, date }) {
  return (
    <div className="Post-container">
      <div className="Post-score">
        { score }
      </div>
      <div className="Post-title">
        { title }
      </div>
      <div className="Post-author">
        { author }
      </div>
      <div className="Post-comments">
        { comments }
      </div>
      <div className="Post-date">
        { date }
      </div>
    </div>
  )
}
