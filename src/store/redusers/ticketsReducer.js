import { TIKETS_LOADING, TIKETS_ADD, TIKETS_LOADED, TIKETS_ERROR, VIEW_MORE_TIKETS } from '../types'
import { initialStateTickets } from '../initialState'

const ticketsReducer = (state = initialStateTickets, action) => {
  switch (action.type) {
    case TIKETS_LOADING:
      return {
        ...state,
        ticketsLoading: false,
      }

    case TIKETS_ADD:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }

    case TIKETS_LOADED:
      return {
        ...state,
        ticketsLoading: false,
      }

    case TIKETS_ERROR:
      return {
        ...state,
        ticketsError: true,
      }

    case VIEW_MORE_TIKETS:
      return {
        ...state,
        ticketsCounter: state.ticketsCounter + 5,
      }

    default:
      return state
  }
}

export default ticketsReducer
