import * as API from '../utils/api'
import * as type from './types'

export const receiveCategories = categories => ({
  type: type.RECEIVE_CATEGORIES,
  categories,
})

export const getCategories = () => dispatch => (
  API
    .getCategories()
    .then(categories => dispatch(receiveCategories(categories)))
)
