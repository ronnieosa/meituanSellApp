import React from 'react'
import './style.less'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commentState:1
        }
    }
    render(){
        const data = this.props.data;
        return(
            <div className="clearfix order-item-container">
                <div className="order-item-img fl">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment fr">
                    {
                        this.state.commentState===0?<button onClick={this.showComment.bind(this)}>评价</button>
                            :
                            this.state.commentState===1?''
                                :
                                <button className="unselected btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户: {data.title}</span>
                    <span>价格: ¥{data.price}</span>
                </div>
                {
                    this.state.commentState===1?
                        <div className="comment-area">
                            <textarea ref="commentText" style={{width:'100%',height:'80px'}}></textarea>
                            <button onClick={this.submitClickHandler.bind(this)}>提交</button>
                            <button onClick={this.hideComment.bind(this)}>取消</button>
                        </div>:''
                }
            </div>
            )
    }
    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        })
    }
    showComment(){
        this.setState({
            commentState:1
        })
    }
    hideComment(){
        this.setState({
            commentState:0
        })
    }
    submitClickHandler(){
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const commentTextDom= this.refs.commentText;
        const val = commentTextDom.value.trim();
        if(!val){
            return
        }
        submitComment(id,val,this.commentOK.bind(this));
    }
    commentOK(){
        this.setState({
            commentState:2
        })
    }
}
export default Item