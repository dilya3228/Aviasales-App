import * as action from '../action'
import { SORT_BY_CHEAPEST, SORT_BY_TIME, SORT_BY_OPTIMAL } from '../types'
import { initialStateTab } from '../initialState'

const tabReducer = (state = initialStateTab, { type }) => {
  switch (type) {
    case SORT_BY_CHEAPEST:
      return {
        ...state,
        sortTab: SORT_BY_CHEAPEST,
      }
    case SORT_BY_TIME:
      return {
        ...state,
        sortTab: SORT_BY_TIME,
      }
    case SORT_BY_OPTIMAL:
      return {
        ...state,
        sortTab: SORT_BY_OPTIMAL,
      }
    default:
      return state
  }
}

export default tabReducer
