import { RECEIVE_POST_DETAILS } from '../actions/types'

export default function postDetails(state = {}, action) {
  switch (action.type) {
   case RECEIVE_POST_DETAILS:
     const { post } = action
     return post
    default:
      return state
  }
}
