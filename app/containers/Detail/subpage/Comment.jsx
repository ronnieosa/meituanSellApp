import React from 'react'
import {getCommentData} from '../../../fetch/detail/detail'
import CommentList from '../../../components/CommentList/index'
import LoadMore from '../../../components/LoadMore/index'
import './style.less'

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasMore:false,
            data:[],
            isLoading:false,
            nextPage:1
        }
    }
    render(){
        return(
            <div className="comment-container">
                {
                    this.state.data.length?<CommentList data={this.state.data}/>:<div>loading...</div>
                }
                {
                    this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoading={this.state.isLoading}/>:''
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const id = this.props.id;
        const res = getCommentData(0,id);
        this.resultHandler(res);
    }
    loadMoreData(){
        this.setState({
            isLoading:true
        })
        const id = this.props.id;
        const page =this.state.nextPage;
        const res = getCommentData(page,id);
        this.resultHandler(res);
        // 后续处理
        this.setState({
            isLoading:false,
            nextPage:page+1
        })
    }
    resultHandler(res){
        res.then(res=>{
            return res.json()
        }).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore,
                data: this.state.data.concat(data)
            })
        })
    }
}

export default Comment