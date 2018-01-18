import * as API from '../utils/api'
import * as type from './types'


export const postVote = (id, option) => dispatch => (
  API
    .postVote(id, option)
    .then(() => {
      dispatch(getPosts())
      dispatch(getPostsById(id))
    })
)

export const receivePosts = posts => ({
  type: type.RECEIVE_POSTS,
  posts,
})

export const getPosts = () => dispatch => (
  API
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const receivePostDetails = post => ({
  type: type.RECEIVE_POST_DETAILS,
  post,
})

export const getPostsById = id => dispatch => (
  API
    .getPostsById(id)
    .then(post => dispatch(receivePostDetails(post)))
)

export const addPost = ({title, body, author, category}) => ({
  type: type.ADD_POST,
  title,
  body,
  author,
  category,
})

export const deletePost = id => ({
  type: type.DELETE_POST,
  id,
})

export const editPost = ({id, title, body, author, category}) => ({
  type: type.EDIT_POST,
  id,
  title,
  body,
  author,
  category,
})
