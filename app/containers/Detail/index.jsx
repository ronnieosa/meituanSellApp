import React from 'react'
import Header from '../../components/Header/index'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

class Detail extends React.Component{

    render(){
        const id = this.props.params.id;
        return(
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
export default Detail
