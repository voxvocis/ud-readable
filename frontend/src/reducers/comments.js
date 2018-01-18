import {
   ADD_COMMENT,
   RECEIVE_COMMENTS,
 } from '../actions/types'


export default function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const { comments } = action
      const commentsObj = comments.reduce((acc, comment) => {
        acc[comment.id] = comment
        return acc
      }, {})
      return {
        ...state,
        ...commentsObj,
      }
    default:
      return state
  }
}
