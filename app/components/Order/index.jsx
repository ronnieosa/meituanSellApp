import React from 'react'
import './style.less'
import Item from './Item/index'

class OrderList extends React.Component{
    render(){
        const data = this.props.data;
        const submitComment = this.props.submitComment;
        return(
            <div>
                {
                    data.map((item,idx)=>{
                        return <Item key={idx} data={item} submitComment={submitComment}/>
                    })
                }
            </div>
        )
    }
}
export default OrderList