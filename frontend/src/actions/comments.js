import * as API from '../utils/api'
import * as type from './types'
import { getPostsById } from './posts'
const uuidv4 = require('uuid/v4')

export const receiveComments = comments => ({
  type: type.RECEIVE_COMMENTS,
  comments,
})

export const getCommentsByPostId = id => dispatch => (
  API
    .getCommentsByPostId(id)
    .then(comments => dispatch(receiveComments(comments)))
)

export const addComment = ({author, body, parentId}, postId) => dispatch => (
  API
    .postComment({
      id: uuidv4(),
      timestamp: Date.now(),
      body,
      author,
      parentId,
    })
    .then(() => dispatch(getCommentsByPostId(postId)))
)

export const deleteComment = (commentId, postId) => dispatch => (
  API
    .deleteComment(commentId)
    .then(() => dispatch(getCommentsByPostId(postId)))
)

export const updateComment = (commentId, data, postId) => dispatch => (
  API
    .updateComment(commentId, data)
    .then(() => dispatch(getCommentsByPostId(postId)))
)

export const upVoteComment = (id, postID, option) => dispatch => (
  API
    .commentVote(id, option)
    .then(() => {
      dispatch(getCommentsByPostId(postID))
      dispatch(getPostsById(postID))
    })
)
