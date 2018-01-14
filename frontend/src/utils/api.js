const HEADERS = { 'Authorization': 'Readable' }
const BASE_URL = 'http://localhost:3001'

export function fetchPosts() {
  const url = `${BASE_URL}/posts`
  return fetch(url, { headers: HEADERS })
    .then((res) => res.json())
}

export function fetchCategories() {
  const url = `${BASE_URL}/categories`
  return fetch(url, { headers: HEADERS })
    .then((res) => res.json())
}

export function fetchComments(id) {
  const url = `${BASE_URL}/posts/${id}/comments`
  return fetch(url, { headers: HEADERS })
    .then((res) => res.json())
}
