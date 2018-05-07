import React from 'react'
import './style.less'

class UserInfo extends React.Component{
    render(){
        return(
            <div className="user-container">
               <p>
                   <i className="icon-user"></i>
                   {this.props.userName}
               </p>
                <p>
                    <i className="icon-location"></i>
                    {this.props.cityName}
                </p>
            </div>
        )
    }
}
export default UserInfo