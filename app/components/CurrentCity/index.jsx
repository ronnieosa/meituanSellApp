import React from 'react'
import './style.less'

class CurrentCity extends React.Component{
    render(){
        return(
            <div className="current-city">
                定位城市: <span className="city-name">{this.props.cityName}</span>
            </div>
        )
    }
}
export default CurrentCity
