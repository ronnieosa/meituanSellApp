import * as actionTypes from '../constant/userinfo'

export function update(data){
    return{
        type:actionTypes.USER_UPDATE,
        data
    }
}


