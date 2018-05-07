import React from 'react'
import './style.less'

class LoadMore extends React.Component{
    render(){
        return(
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoading?<span>加载中...</span>:<span onClick={this.loadMoreHandler.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandler(){
        this.props.loadMoreFn()
    }
    componentDidMount(){
        const loadMore = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;  //事件节流

        function callback(){
            const top = wrapper.getBoundingClientRect().top;   //wrapper节点到页面顶部的距离
            const windowHeight = window.screen.height;
            if(top && top < windowHeight){
                loadMore()
            }
        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoading){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }
}
export default LoadMore
