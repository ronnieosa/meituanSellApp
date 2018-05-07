import React from 'react'
import './style.less'

class CityList extends React.Component{
    render(){
        return(
            <div className="newcity-sele">
                <h4 className="list-title">热门城市</h4>
                <div className="list-div">
                    <ul className="table">
                        <li onClick={this.clickHandler.bind(this,'北京')}>北京</li>
                        <li onClick={this.clickHandler.bind(this,'上海')}>上海</li>
                        <li onClick={this.clickHandler.bind(this,'广州')}>广州</li>
                        <li onClick={this.clickHandler.bind(this,'深圳')}>深圳</li>
                        <li onClick={this.clickHandler.bind(this,'天津')}>天津</li>
                        <li onClick={this.clickHandler.bind(this,'西安')}>西安</li>
                        <li onClick={this.clickHandler.bind(this,'重庆')}>重庆</li>
                        <li onClick={this.clickHandler.bind(this,'杭州')}>杭州</li>
                        <li onClick={this.clickHandler.bind(this,'南京')}>南京</li>
                        <li onClick={this.clickHandler.bind(this,'武汉')}>武汉</li>
                        <li onClick={this.clickHandler.bind(this,'成都')}>成都</li>
                    </ul>
                </div>
            </div>
        )
    }
    clickHandler(newcity){
        const changeFn = this.props.changeFn;
        changeFn(newcity)
    }
}
export default CityList
