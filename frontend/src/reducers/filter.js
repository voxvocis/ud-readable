import {
  FILTER_ON_SCORE,
  FILTER_ON_DATE,
} from '../actions/types'

const initialFilterState = {
  score: false,
  date: false,
  enabled: true,
}

export default function filter(state = initialFilterState, action) {
  const { filter } = action
  switch (action.type) {
    case FILTER_ON_SCORE:
      return {
        ...state,
        ['score']: filter,
      }
    case FILTER_ON_DATE:
      return {
        ...state,
        ['date']: filter,
      }
      default:
      return state
    }
}
