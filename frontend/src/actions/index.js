// Action types
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'

export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'

// Action creators
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

export const addComment = ({parentId, body, author}) => ({
  type: ADD_COMMENT,
  title,
  body,
  author,
  category,
})

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id,
})

export const editComment = ({id, title, body, author, category}) => ({
  type: EDIT_COMMENT,
  id,
  title,
  body,
  author,
  category,
})

export const upVoteComment = id => ({
  type: UP_VOTE_COMMENT,
  id,
})
