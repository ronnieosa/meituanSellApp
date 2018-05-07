import React from 'react'
import './style.less'

class Ad extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="ad-container">
                {data.map((item,index)=>{
                   return(
                       <a className="ad-item" key={index}>
                           <span className="info">
                               <strong>{item.title}</strong>
                               <small>{item.desc}</small>
                           </span>
                           <span className="imgbox">
                               <img src={item.img} alt=""/>
                           </span>
                       </a>
                   )
               })}
            </div>
        )
    }
}
export default Ad
