import React from 'react'
import SearchHeader from '../../components/SearchHeader/index'

class Search extends React.Component{
    render(){
        const params = this.props.params;
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
            </div>
        )
    }
    componentDidMount(){
        const params = this.props.params;
        console.log(params.category)
        console.log(params.keyword)
    }
}
export default Search