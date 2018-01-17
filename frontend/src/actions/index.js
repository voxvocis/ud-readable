import * as API from '../utils/api'

// Action types
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST_DETAILS = 'RECEIVE_POST_DETAILS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'

export const FILTER_ON_SCORE = 'FILTER_ON_SCORE'

// Action creators
export const postVote = (id, option) => dispatch => (
  API
    .postVote(id, option)
    .then(() => {
      dispatch(getPosts())
      dispatch(getPostsById(id))
    })
)

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
})

export const getCategories = () => dispatch => (
  API
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
})

export const getPosts = () => dispatch => (
  API
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const receivePostDetails = post => ({
  type: RECEIVE_POST_DETAILS,
  post,
})

export const getPostsById = id => dispatch => (
  API
    .getPostsById(id)
    .then(post => dispatch(receivePostDetails(post)))
)

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
})

export const getCommentsByPostId = id => dispatch => (
  API
    .getCommentsByPostId(id)
    .then(comments => dispatch(receiveComments(comments)))
)

export const addPost = ({title, body, author, category}) => ({
  type: ADD_POST,
  title,
  body,
  author,
  category,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const editPost = ({id, title, body, author, category}) => ({
  type: EDIT_POST,
  id,
  title,
  body,
  author,
  category,
})

export const upVotePost = id => ({
  type: UP_VOTE_POST,
  id,
})

export const addComment = ({parentId, title, body, author}) => ({
  type: ADD_COMMENT,
  parentId,
  title,
  body,
  author,
})

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id,
})

export const editComment = ({id, title, body, author}) => ({
  type: EDIT_COMMENT,
  id,
  title,
  body,
  author,
})

export const upVoteComment = id => ({
  type: UP_VOTE_COMMENT,
  id,
})

export const filterOnScore = filter => ({
  type: FILTER_ON_SCORE,
  filter,
})
