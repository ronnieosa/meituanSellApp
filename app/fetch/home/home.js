import {get} from '../get'

export function getData(){
    const result = get('/api/homead')
    return result
    // result1.then(res=>{return res.json()}).then(json=>{console.log(json)})
}
export function getListData(city,page){
    const result = get('/api/homelist/'+ encodeURIComponent(city) + '/' + page)
    return result
}
