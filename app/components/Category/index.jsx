import React from 'react'
import './style.less'
import ReactSwipe from 'react-swipe'
import imgSrc1 from '../../../static/images/img1.png'
import imgSrc2 from '../../../static/images/img2.png'
import imgSrc3 from '../../../static/images/img3.png'
class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
    }
    render(){
        let opt = {
            auto: 3000,
            callback:(index)=>{
                this.setState({
                    index
                })
            }
        }
        return(
           <div>
               <ReactSwipe className="carousel" swipeOptions={opt}>
                   <div>
                       <ul className="ullist clearfix">
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc1} alt=""/>
                               <span>美食</span>
                           </li>
                       </ul>
                   </div>
                   <div>
                       <ul className="ullist clearfix">
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc2} alt=""/>
                               <span>电影</span>
                           </li>
                       </ul>
                   </div>
                   <div>
                       <ul className="ullist clearfix">
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                           <li className="list-item fl">
                               <img src={imgSrc3} alt=""/>
                               <span>酒店</span>
                           </li>
                       </ul>
                   </div>
               </ReactSwipe>
               <div className="index-continer">
                   <ul>
                       <li className={this.state.index===0?'selected':''}></li>
                       <li className={this.state.index===1?'selected':''}></li>
                       <li className={this.state.index===2?'selected':''}></li>
                   </ul>
               </div>
           </div>
        )
    }
    componentDidMount(){
        console.log(ReactSwipe)
    }
}
export default Category
