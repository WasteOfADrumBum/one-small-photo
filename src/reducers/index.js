import { combineReducers } from 'redux'
import InboxReducer from './InboxReducer'
import CMSReducer from './CMSReducer'

const rootReducer = combineReducers({
  inbox: InboxReducer,
  cms: CMSReducer,
})

export default rootReducer
