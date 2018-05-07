import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsOtherFile from '../../actions/userinfo'
import {hashHistory} from 'react-router'
import Header from '../../components/Header/index'
import LoginComponent from '../../components/Login/index'

class Login extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state ={
            checking:true
        }
    }
    render(){
        return(
            <div>
                <Header title="登录"/>
                {
                    this.state.checking?<div></div>:<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck()
    }
    // 登录成功后进行的操作
    loginHandle(username){
        // 保存用户名
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        // 记录username(redux中)
        userinfo.userName = username;
        actions.update(userinfo);
        console.log(userinfo)
        //跳转
        const params = this.props.params;
        const router = params.router;
        if(router){
            hashHistory.push(router)
        }else{
            hashHistory.push('/user')
        }
    }
    doCheck(){
        const userinfo = this.props.userinfo;
        console.log(userinfo)
        if(userinfo.userName){
            this.goUserPage()
        }else{
            this.setState({
                checking:false
            })
        }
    }
    goUserPage(){
        hashHistory.push('/user')
    }
}
function mapStateToprops(state){
    return {
        userinfo:state.update
    }
}
function mapDispatchToProps(dispatch){
    return{
        userInfoActions: bindActionCreators(userInfoActionsOtherFile,dispatch)
    }
}
export default connect(
    mapStateToprops,
    mapDispatchToProps
)(Login)