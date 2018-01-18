import { FILTER_ON_SCORE } from '../actions/types'

const initialFilterState = {
  score: false,
  date: false,
}

export default function filter(state = initialFilterState, action) {
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
