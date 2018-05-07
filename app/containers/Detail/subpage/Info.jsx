import React from 'react'
import {getInfoData} from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo/index'

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info:false
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.info?<DetailInfo data={this.state.info}/>:''
                }
            </div>
        )
    }
    componentDidMount(){
        const id = this.props.id;
        var result = getInfoData(id)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                info:json
            })
        });
    }
}
export default Info