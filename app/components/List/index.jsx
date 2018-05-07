import React from 'react'
import Item from './Item/index'

class List extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div>
                {
                    data.map((item,index)=>{
                        return <Item key={index} item={item}/>
                    })
                }
            </div>
        )
    }
}
export default List
