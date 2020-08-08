import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'
const middlewere = [thunk]
const initialState = {}

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middlewere)))

export default store