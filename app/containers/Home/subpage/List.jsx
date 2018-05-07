import React from 'react'
import { getListData } from '../../../fetch/home/home'
import './style.less'
import ListComponent from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore/index'

class list extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
            hasMore:false,
            isLoading:false,
            nextPage:1
        }
    }
    render(){
        return(
            <div className="list-margin">
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>:<div>loading...</div>
                }
                {
                    this.state.hasMore?<LoadMore isLoading={this.state.isLoading} loadMoreFn={this.loadMoreData.bind(this)} />:''
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()
    }
    loadMoreData(){
        this.setState({
            isLoading:true
        })
        const cityName = this.props.cityName;
        const page = this.state.nextPage;
        const res = getListData(cityName,page);
        this.resultHandler(res)
        this.setState({
            nextPage:page+1,
            isLoading:false
        })
    }
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const res = getListData(cityName,0);
        this.resultHandler(res)
    }
    resultHandler(res){
        res.then(res=>{return res.json()}).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore:hasMore,
                data:this.state.data.concat(data)  //data数据拼接
            })
        })
    }
}
export default list
