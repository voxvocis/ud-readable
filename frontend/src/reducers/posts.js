import {
   ADD_POST,
   RECEIVE_POSTS,
   RECEIVE_POST_DETAILS,
 } from '../actions/types'

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      const { posts } = action
      const postObject = posts.reduce((acc, post) => {
          acc[post.id] = post
          return acc
        }, {})
      return {
        ...postObject,
      }
    case RECEIVE_POST_DETAILS:
      const { post } = action
      return {
        ...state,
        [post.id]: post,
      }
    case ADD_POST:
      const { category } = action
      return state
      default:
      return state
    }
  }
