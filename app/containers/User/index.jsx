import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import Header from '../../components/Header/index'
import UserInfo from '../../components/UserInfo/index'
import OrderList from './subpage/OrderList'

class User extends React.Component{
    render(){
        const userinfo = this.props.userinfo;
        return(
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo userName={userinfo.userName} cityName={userinfo.cityName}/>
                <OrderList userName={userinfo.userName} />
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userinfo.userName){
            hashHistory.push('/login')
        }
    }
}

function mapStateToprops(state){
    return {
        userinfo:state.update
    }
}
function mapDispatchToProps(dispatch){
    return{}
}
export default connect(
    mapStateToprops,
    mapDispatchToProps
)(User)
