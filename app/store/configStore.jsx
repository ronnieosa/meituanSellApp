import { createStore } from 'redux'
import rootReducer from  '../reducers'


export default function configStore(initState){
    const store = createStore(rootReducer,initState)
    return store
}

