import React from 'react'

import Header from './components/header'
import Player from './page/player'
import MusicList from './page/musiclist'
import { MUSIC_LIST } from './config/musiclist'
import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router'
import Pubsub from 'pubsub-js'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            musicList:MUSIC_LIST,
            currentMusicItem:MUSIC_LIST[0]
        }
    }
    playMusic(musicItem){
        $('#player').jPlayer('setMedia',{
            mp3:musicItem.file
        }).jPlayer('play');
        this.setState({
            currentMusicItem:musicItem
        })
    }
    playNext(type='next'){
        let index = this.findMusicIndex(this.state.currentMusicItem);
        let musicListLength = this.state.musicList.length;
        let newIndex = null;
        if(type ==='next'){
            newIndex = (index+1) % musicListLength;
        }else{
             newIndex = (index-1+ musicListLength) % musicListLength;
        }
        this.playMusic(this.state.musicList[newIndex])
    }
    findMusicIndex(musicItem){
        return this.state.musicList.indexOf(musicItem)
    }
    componentDidMount(){
        $('#player').jPlayer({
            supplied:'mp3',
            wmode:'window'
        });
        this.playMusic(this.state.currentMusicItem);
        // jplayer提供的监听
        $("#player").bind($.jPlayer.event.ended,(e)=>{
            this.playNext()
        })
        // 订阅
        Pubsub.subscribe('DELETE_MUSIC',(msg,musicItem)=>{
            this.setState({
                musicList:this.state.musicList.filter(item=>{
                    return item !== musicItem
                })
            })
        })
        Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem)=>{
            this.playMusic(musicItem)
        })
        Pubsub.subscribe('PLAY_PREV',()=>{
            this.playNext('prev')
        })
        Pubsub.subscribe('PLAY_NEXT',()=>{
            this.playNext('next')
        })

    }
    componentWillUnMount(){
        Pubsub.unsubscribe('DELETE_MUSIC');
        Pubsub.unsubscribe('PLAY_MUSIC');
        Pubsub.unsubscribe('PLAY_PREV');
        Pubsub.unsubscribe('PLAY_NEXT');
        $("#player").unbind($.jPlayer.event.ended)
    }
    render(){
        return(
            <div>
                <Header/>
                { React.cloneElement(this.props.children,this.state) }
            </div>
        )
    }
}
class Root extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Player}></IndexRoute>
                    <Route path="/list" component={MusicList}></Route>
                </Route>
            </Router>
        )
    }
}
export default Root
