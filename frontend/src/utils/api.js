const header = process.env.REACT_APP_API_HEADERS
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const HEADERS = { 'Authorization': header }

const POST_HEADERS = {
  ...HEADERS,
  "Content-Type": "application/json"
}

export function getPosts() {
  const url = `${BASE_URL}/posts`
  return get(url)
}

export function getPostsById(id) {
  const url = `${BASE_URL}/posts/${id}`
  return get(url)
}

export function getCategories() {
  const url = `${BASE_URL}/categories`
  return get(url)
}

export function getCommentsByPostId(id) {
  const url = `${BASE_URL}/posts/${id}/comments`
  return get(url)
}

export function getCommentsById(id) {
  const url = `${BASE_URL}/comments/${id}`
  return get(url)
}

export function commentVote(id, option) {
  const url = `${BASE_URL}/comments/${id}`
  const body = JSON.stringify({option})
  return post(url, body)
}

export function updateComment(id, body) {
  const url = `${BASE_URL}/comments/${id}`
  return put(url, JSON.stringify(body))
}

export function postVote(id, option) {
  const url = `${BASE_URL}/posts/${id}`
  const body = JSON.stringify({option})
  return post(url, body)
}

export function postPost(body) {
  const url = `${BASE_URL}/posts`
  return post(url, JSON.stringify(body))
}

export function updatePost(id, body) {
  const url = `${BASE_URL}/posts/${id}`
  return put(url, JSON.stringify(body))
}

export function deletePost(id) {
  const url = `${BASE_URL}/posts/${id}`
  return deleteIt(url)
}

export function deleteComment(id) {
  const url = `${BASE_URL}/comments/${id}`
  return deleteIt(url)
}

export function postComment(body) {
  const url = `${BASE_URL}/comments`
  return post(url, JSON.stringify(body))
}

const get = url => {
  return fetch(url, { headers: HEADERS })
    .then((res) => res.json())
    .catch(err => console.log(err))
}

const post = (url, body) => {
  return fetch(url, {
    method: "POST",
    headers: POST_HEADERS,
    body,
  })
    .then((res) => res.json())
    .catch(err => console.log(err))
}

const put = (url, body) => {
  return fetch(url, {
    method: "PUT",
    headers: POST_HEADERS,
    body,
  })
    .then((res) => res.json())
    .catch(err => console.log(err))
}

const deleteIt = url => {
  return fetch(url, {
    method: "DELETE",
    headers: HEADERS,
  })
    .then((res) => res.json())
    .catch(err => console.log(err))
}
