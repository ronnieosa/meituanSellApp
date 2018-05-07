import React from 'react'
import Star from '../Star/index'
import './style.less'

class DetailInfo extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="detail-info">
                <a href="#" className="img-container">
                    <img src={data.img} className="bg-img"/>
                    <div className="desc">
                        <h1>{data.title}</h1>
                        <span>{data.desc}</span>
                    </div>
                </a>
                <div className="price-group">
                    <div className="group-item buy-price">
                        <div className="container">
                            <div className="price">
                                <strong>{data.price}</strong>
                                <span>元</span>
                                <span className="yuanjia">门市价:{data.money}</span>
                            </div>
                            <a href="#" className="buy-button">
                                立即抢购
                            </a>
                        </div>
                    </div>
                    <div className="group-item">
                        <div className="count">已售:{data.count}</div>
                        <div className="count">
                            评星:
                            <Star star={data.star}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailInfo