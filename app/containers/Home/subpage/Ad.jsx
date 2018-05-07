import React from 'react'
import {getData} from '../../../fetch/home/home'
import Adcomponent from '../../../components/Ad/index'

class Ad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length?<Adcomponent data={this.state.data}/>:<div>loading...</div>
                }
            </div>
        )
    }
    componentDidMount(){
        const res = getData();
        res.then(res=>{return res.json()}).then(json=>{
            const data = json;
            if(data.length){
                this.setState({
                    data
                })
            }
        })
    }
}
export default Ad
