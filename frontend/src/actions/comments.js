import * as API from '../utils/api'
import * as type from './types'

export const receiveComments = comments => ({
  type: type.RECEIVE_COMMENTS,
  comments,
})

export const getCommentsByPostId = id => dispatch => (
  API
    .getCommentsByPostId(id)
    .then(comments => dispatch(receiveComments(comments)))
)

export const addComment = ({parentId, title, body, author}) => ({
  type: type.ADD_COMMENT,
  parentId,
  title,
  body,
  author,
})

export const deleteComment = id => ({
  type: type.DELETE_COMMENT,
  id,
})

export const editComment = ({id, title, body, author}) => ({
  type: type.EDIT_COMMENT,
  id,
  title,
  body,
  author,
})

export const upVoteComment = id => ({
  type: type.UP_VOTE_COMMENT,
  id,
})
