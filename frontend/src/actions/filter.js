import * as API from '../utils/api'
import * as type from './types'

export const filterOnScore = filter => ({
  type: type.FILTER_ON_SCORE,
  filter,
})
