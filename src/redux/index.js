import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import products from './Products/Products.reducer'

const rootReducer = combineReducers({
  products
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store