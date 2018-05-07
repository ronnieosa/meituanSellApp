import React from 'react'
import Star from '../../Star/index'
import './style.less'

class ComItem extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="comment-item">
                <div className="user-info">
                    <div className="user-pic">
                        <img src={data.userimg} alt=""/>
                    </div>
                    <div className="user-info-text">
                        <div className="username">{data.username}</div>
                        <div className="score">
                            <Star star={data.star}/>
                            <span className="date">{data.date}</span>
                        </div>
                    </div>
                </div>
                <div className="user-comment">
                    <p>{data.comment}</p>
                </div>
            </div>
        )
    }
}
export default ComItem