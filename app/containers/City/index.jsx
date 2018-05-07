import React from 'react'
import { bindActionCreators } from 'redux'
import Header from '../../components/Header/index'
import * as userInfoActionsOtherFile from '../../actions/userinfo'
import {connect} from 'react-redux'
import CurrentCity from '../../components/CurrentCity/index'
import CityList from '../../components/CityList/index'
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import {hashHistory} from 'react-router'

class City extends React.Component{
    render(){
        return(
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newcity){
        if(newcity==null){return}
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName=newcity;
        this.props.userInfoActions.update(userinfo)
        //修改localstorage
        LocalStore.setItem(CITYNAME,newcity)
        //跳转到首页
        hashHistory.push('/')
    }
}
function mapStateToProps(state) {
    return{
        userinfo:state.update
    }
}
function mapDispatchToProps(dispatch) {
    return{
        userInfoActions: bindActionCreators(userInfoActionsOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
