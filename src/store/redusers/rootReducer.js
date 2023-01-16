import { combineReducers } from 'redux'

import ticketsReducer from './ticketsReducer'
import tabReducer from './tabReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  ticketsReducer,
  tabReducer,
  filterReducer,
})
export default rootReducer
