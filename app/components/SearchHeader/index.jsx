import React from 'react'
import SearchInput from '../SearchInput/index'
import {hashHistory} from 'react-router'

import './style.less'

class SearchHeader extends React.Component{
    render(){
        return(
            <div className="search-header">
                <div className="back-icon" onClick={this.clickhandler.bind(this)}>
                    <i className="icon-left"></i>
                </div>
                <div className="search-header-middle">
                    <div className="container">
                        <i className="icon-search isty"></i>
                        <SearchInput value={this.props.keyword ||''} enterHandler={this.enterHandler.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    clickhandler(){
        window.history.back()
    }
    enterHandler(value){
        hashHistory.push('/search/all/'+encodeURIComponent(value))
    }
}
export default SearchHeader