import React from 'react'
import ComItem from './Item/index'

class CommentList extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div>
                {
                    data.map((item,index)=>{
                        return <ComItem key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}
export default CommentList