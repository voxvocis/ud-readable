import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
import comments from './comments'
import filter from './filter'
import postDetails from './postDetails'


 export default combineReducers({
   posts,
   categories,
   comments,
   filter,
   postDetails,
 })
