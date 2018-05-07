import React from 'react'
import './style.less'

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    render(){
        return(
            <input type="text" placeholder="输入商家/品类/商圈" className="inputArea" value={this.state.value} onChange={this.changeHandler.bind(this)}
            onKeyUp={this.keyUpHandler.bind(this)}/>
        )
    }
    componentDidMount(){
        this.setState({
            value:this.props.value || ''
        })
    }
    changeHandler(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandler(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandler(this.state.value)
    }
}
export default SearchInput