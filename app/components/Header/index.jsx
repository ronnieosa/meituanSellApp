import React from 'react'
import {hashHistory} from 'react-router'
import './style.less'

class Header extends React.Component{
    render(){
        return(
            <div className="common-header">
                <div className="back-icon" onClick={this.clickhandler.bind(this)}>
                    <i className="icon-left"></i>
                </div>
                <h3 className="common-title">{this.props.title}</h3>
            </div>
        )
    }
    clickhandler(){
        const backRouter = this.props.backRouter;
        if(backRouter){
            hashHistory.push(backRouter)
        }else{
            window.history.back();
        }
    }
}
export default Header
