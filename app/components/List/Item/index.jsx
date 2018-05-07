import React from 'react'
import { Link } from 'react-router'
import './style.less'

class Item extends React.Component{
    render(){
        const data = this.props.item;
        return(
            <div className="list-items">
                <Link to={'/detail/'+data.id} className="react">
                    <div className="react-container clearfix">
                        <div className="re-img">
                            <img src={data.img} />
                        </div>
                        <div className="re-info">
                            <div className="title">{data.title}</div>
                            <div className="sub-title">{data.subTitle}</div>
                            <div className="price">
                                <span className="youhui">{data.sale}</span>
                                <span className="youhuis">元</span>
                                <span className="yuanjias">门市价:</span>
                                <span className="yuanjia">{data.price}</span>
                                <span className="line-right">已售:{data.number}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Item
