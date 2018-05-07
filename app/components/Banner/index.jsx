import React from 'react'
import './style.less'

class Banner extends React.Component{
    render(){
        const src = 'http://p1.meituan.net/mmc/dbc70b32f22415bc55d1523d7141735c18365.jpg';
        return(
            <div className="banner-container">
                <img src={src} />
            </div>
        )
    }
}
export default Banner
