import { combineReducers } from 'redux'
import {
   ADD_POST,
   ADD_COMMENT,
   RECEIVE_POSTS,
 } from '../actions'

function posts(state = {}, action) {
   switch (action.type) {
     case RECEIVE_POSTS:
      const { posts } = action
      return {
        ...state,
        ...posts,
      }
     case ADD_POST:
       const { category } = action
       return state
     default:
       return state
   }
 }

 function comments(state = {}, action) {
    switch (action.type) {
      case ADD_COMMENT:
        const { parentId } = action
        return state
      default:
        return state
    }
  }

 export default combineReducers({
   posts,
   comments,
 })
