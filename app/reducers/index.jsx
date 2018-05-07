import { combineReducers } from 'redux'

import * as reduceType from './reduces'
import store from './store'

const rootReducer = combineReducers(
    {
        update:reduceType.update,
        store:store
    }
)
export default rootReducer
