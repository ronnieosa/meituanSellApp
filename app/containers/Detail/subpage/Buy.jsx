import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import * as storeActionsOtherFile from '../../../actions/store'
import BuyAndStore from '../../../components/BuyAndStore/index'

class Buy extends React.Component{
    constructor(prosp){
        super(prosp)
        this.state = {
            isStore:false
        }
    }
    render(){
        return(
            <div>
                <BuyAndStore isStore={this.state.isStore} StoreHandler={this.StoreHandler.bind(this)} BuyHandler={this.BuyHandler.bind(this)}/>
            </div>
        )
    }
    StoreHandler(){
        // 1.验证登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        // 2.改变收藏状态
        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if(this.state.isStore){
            storeActions.remove({id:id})
        }else{
            storeActions.add({id:id})
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
    BuyHandler(){
        // 1.验证登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        hashHistory.push('/user')
    }
    componentDidMount(){
        // 1.查看是否已收藏
        this.checkStoreState()
    }
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;
        store.some(item=>{
            if(item.id === id){
                this.setState({
                    isStore:true
                })
                return true
            }
        })
    }
    // 验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.userName){
            hashHistory.push('/login/'+ encodeURIComponent('/detail/'+ id))
            return false
        }
        return true
    }
}
function mapStateToprops(state){
    return {
        userinfo:state.update,
        store:state.store
    }
}
function mapDispatchToProps(dispatch){
    return{
        storeActions: bindActionCreators(storeActionsOtherFile,dispatch)
    }
}
export default connect(
    mapStateToprops,
    mapDispatchToProps
)(Buy)