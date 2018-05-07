import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsOtherFile from '../actions/userinfo'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'

class App extends React.Component{
     constructor(props){
        super(props)
         this.state = {
            initDone : false
         }
     }
    render(){
        return(
            <div>
                {
                    this.state.initDone?
                        this.props.children:<div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount(){
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName ==null){
            cityName = '深圳'
        }
        this.props.userInfoActions.update({
            cityName
        })
        this.setState({
            initDone : true
        })
    }
}
function mapStateToProps(state) {
    return{}
}
function mapDispatchToProps(dispatch) {
    return{
        userInfoActions: bindActionCreators(userInfoActionsOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
