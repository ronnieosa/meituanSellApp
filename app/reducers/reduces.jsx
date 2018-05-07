import * as actionTypes from '../constant/userinfo'
const initState  = {}

function update(state = initState,action){
    switch(action.type){
        case actionTypes.USER_UPDATE:
            return action.data;
        default:
            return state
    }
}

export { update }
