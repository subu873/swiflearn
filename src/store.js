import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middleware = [thunk]
const intialState = {}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  rootReducer,
  intialState,
  //   applyMiddleware(...middleware)
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
