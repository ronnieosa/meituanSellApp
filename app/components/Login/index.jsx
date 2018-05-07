import React from 'react'
import './style.less'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            phone:''
        }
    }
    render(){
        return(
            <div>
                <div className="login-container">
                    <div className="title-container">
                        <div className="title">
                            <a href="#" className="react active">美团账号登录</a>
                        </div>
                        <div className="title">
                            <a href="#" className="react">手机验证登录</a>
                        </div>
                        <div className="slide"></div>
                    </div>
                    <div className="input-container">
                        <div className="input">
                            <div className="area">
                                <input onChange={this.changeHandler.bind(this)} value={this.state.phone} type="text" className="input-user" placeholder="账户名/手机号/Email"/>
                            </div>
                            <div className="area">
                                <input type="text" className="input-user" placeholder="请输入您的密码"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button onClick={this.clickHandler.bind(this)} className="button-login">登录</button>
                </div>
            </div>
        )
    }
    changeHandler(e){
        this.setState({
            phone:e.target.value
        })
    }
    clickHandler(){
       const username = this.state.phone;
       const loginHandle = this.props.loginHandle;
        loginHandle(username)
    }
}
export default Login