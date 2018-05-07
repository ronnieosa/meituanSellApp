import React from 'react'
import './style.less'
import { getOrderListData,postComment } from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/Order/index'

class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length?<OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>:''
                }
            </div>
        )
    }
    componentDidMount(){
        const username = this.props.userName;
        //获取用户订单列表
        if(username){
            this.loadOrderList(username);
        }
    }
    loadOrderList(username){
        // 调用fetch目录方法获取后端数据
        const rst = getOrderListData(username);
        rst.then(res=>{
            return res.json()
        }).then(json=>{
            // 接收
            // console.log(json)
            this.setState({
                data:json
            })
        })
    }
    submitComment(id,val,callback){
        const result = postComment(id,val);
        result.then(res=>{
            return res.json();
            }).then(json=>{
               if(json.errno === 0){
                   callback()
               }
        })
    }
}
export default OrderList