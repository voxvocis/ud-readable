import { combineReducers } from 'redux'
import {
   ADD_POST,
   ADD_COMMENT,
   RECEIVE_POSTS,
   RECEIVE_CATEGORIES,
   FILTER_ON_SCORE,
   RECEIVE_POST_DETAILS,
   RECEIVE_COMMENTS,
 } from '../actions'

function posts(state = {}, action) {
   switch (action.type) {
     case RECEIVE_POSTS:
      const { posts } = action
      const postObject = posts.reduce((acc, post) => {
        acc[post.id] = post
        return acc
      }, {})
      return {
        ...state,
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

function postDetails(state = {}, action) {
  switch (action.type) {
   case RECEIVE_POST_DETAILS:
     const { post } = action
     return post
    default:
      return state
  }
}

function categories(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const { categories } = action
      const categoriesObj = categories.categories.reduce((acc, category) => {
        acc[category.path] = category
        return acc
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

const initialFilterState = {
  score: false,
  date: false,
}

  function filter(state = initialFilterState, action) {
     switch (action.type) {
       case FILTER_ON_SCORE:
         const { filter } = action
         return {
           ...state,
           ['score']: filter,
         }
       default:
         return state
     }
   }

 export default combineReducers({
   posts,
   categories,
   comments,
   filter,
   postDetails,
 })
