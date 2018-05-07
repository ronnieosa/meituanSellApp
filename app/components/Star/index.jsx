import React from 'react'
import './style.less'

class Star extends React.Component{
    render(){
        const star =this.props.star ||0;
        return(
            <div className="star-container">
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const light = star>=item?' light':'';
                        return <span key={index} className={"icon-star" + light} />
                    })
                }
            </div>
        )
    }
}
export default Star