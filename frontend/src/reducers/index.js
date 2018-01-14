import { combineReducers } from 'redux'
import {
   ADD_POST,
   ADD_COMMENT,
   RECEIVE_POSTS,
   RECEIVE_CATEGORIES,
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

function categories(state = {}, action) {
  const { categories } = action
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const categoriesObj = categories.categories.reduce((categories, category, i) => {
        categories[i] = category
        return categories
      }, {})
      return {
        ...state,
        ...categoriesObj,
      }
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
   categories,
   comments,
 })
