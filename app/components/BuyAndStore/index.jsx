import React from 'react'
import './style.less'

class BuyAndStore extends React.Component{
    render(){
        const storeState = this.props.isStore;
        return(
            <div className="storeandbuy-container">
                <button onClick={this.storeHandler.bind(this)} className="btn">{storeState?'已收藏':'点击收藏'}</button>
                <button onClick={this.buyHandler.bind(this)} className="btn">点击购买</button>
            </div>
        )
    }
    storeHandler(){
        const StoreHandler = this.props.StoreHandler;
        StoreHandler()
    }
    buyHandler(){
        const BuyHandler = this.props.BuyHandler;
        BuyHandler()
    }
}
export default BuyAndStore