import { RECEIVE_CATEGORIES } from '../actions/types'

export default function categories(state = {}, action) {
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
