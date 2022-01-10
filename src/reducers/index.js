import { combineReducers } from 'redux'
import InboxReducer from './InboxReducer'

const rootReducer = combineReducers({
  inbox: InboxReducer,
})

export default rootReducer
