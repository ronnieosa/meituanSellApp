import React from 'react'
import {Link,hashHistory} from 'react-router'
import SearchInput from '../SearchInput/index'

import './style.less'

class HomeHeader extends React.Component{
    render(){
        return(
            <div id="home_header" className="clearfix">
                <div className="home-header-left fl">
                    <Link to="/city">
                        <sapn>{this.props.cityName}</sapn>&nbsp;
                        <i className="icon-location"></i>
                    </Link>
                </div>
                <div className="home-header-right fr">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                   <div className="search-container">
                       <i className="icon-search isty"></i>
                       <SearchInput value="" enterHandler={this.enterHandler.bind(this)}/>
                   </div>
                </div>
            </div>
        )
    }
    enterHandler(value){
        hashHistory.push('/search/all/'+encodeURIComponent(value))
    }
}
export default HomeHeader
