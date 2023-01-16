import { FILTER_TRANSFERS_THREE, FILTER_TRANSFERS_TWO, FILTER_TRANSFERS_ONE, FILTER_TRANSFERS_ZERO, FILTER_TRANSFERS_ALL } from '../types'
import { initialStateFilter } from '../initialState'

const filterReducer = (state = initialStateFilter, { type }) => {
  const { all, one, two, three, zero } = state

  switch (type) {
    case FILTER_TRANSFERS_ALL:
      return {
        ...state,
        all: !all,
        zero: !all,
        one: !all,
        two: !all,
        three: !all,
      }
    case FILTER_TRANSFERS_ZERO:
      return {
        ...state,
        all: !zero && one && two && three,
        zero: !zero,
      }
    case FILTER_TRANSFERS_ONE:
      return {
        ...state,
        all: zero && !one && two && three,
        one: !one,
      }
    case FILTER_TRANSFERS_TWO:
      return {
        ...state,
        all: zero && one && !two && three,
        two: !two,
      }
    case FILTER_TRANSFERS_THREE:
      return {
        ...state,
        all: zero && one && two && !three,
        three: !three,
      }
    default:
      return state
  }
}

export default filterReducer
