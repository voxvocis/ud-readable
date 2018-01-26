import {
  RECEIVE_POST_DETAILS,
  POST_DETAILS_DELETED,
} from '../actions/types'
const R = require('ramda')

const initState = {
  details: {},
  deleted: false,
}

export default function postDetails(state = initState, action) {
  switch (action.type) {
   case RECEIVE_POST_DETAILS:
     const { post } = action
     const deleted = R.isEmpty(post)
     return {
       ...state,
       ['details']: post,
       ['deleted']: deleted,
     }
   case POST_DETAILS_DELETED:
     return {
       ...state,
       ['deleted']: true,
     }
    default:
      return state
  }
}
