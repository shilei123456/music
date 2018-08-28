import React, { Component } from 'react';
// import { Link } from 'react-router';
import './TopBar.css';
import image from '../../source/left.png';
import imgMusic from '../../source/yinyue.png';
import imgSearch from '../../source/sousuo.png';
import imgUp from '../../source/shangchuan.png';
import redMusic from '../../source/redMusic.png';
import redSeach from '../../source/redSeach.png';
import redUp from '../../source/redUp.png';

export default class TopBar extends Component {
   state={
     isMyMusicShow: 0
   }
   componentDidMount() {
     const { Actions } = this.props;
     Actions.fatchlogin(108);
   }

   changStyle1 = () => {
     if (this.state.isMyMusicShow !== 1) {
       return 'blackStyle';
     }
     return 'redStyle';
   }
   changeImage1 = () => {
     if (this.state.isMyMusicShow !== 1) {
       return imgMusic;
     }
     return redMusic;
   }
   changStyle2 = () => {
     if (this.state.isMyMusicShow !== 2) {
       return 'blackStyle';
     }
     return 'redStyle';
   }
    changeImage2 = () => {
      if (this.state.isMyMusicShow !== 2) {
        return imgSearch;
      }
      return redSeach;
    }
   changStyle3 = () => {
     if (this.state.isMyMusicShow !== 3) {
       return 'blackStyle';
     }
     return 'redStyle';
   }
   changeImage3 = () => {
     if (this.state.isMyMusicShow !== 3) {
       return imgUp;
     }
     return redUp;
   }
   handleMyMusic1 = () => {
     this.setState({
       isMyMusicShow: 1
     });
   }
    handleMyMusic2 = () => {
      this.setState({
        isMyMusicShow: 2
      });
      alert('此功能正在开发!!!');
    }
     handleMyMusic3 = () => {
       this.setState({
         isMyMusicShow: 3
       });
       alert('此功能正在开发!!!');
     }
     render() {
       const { Music } = this.props;
       return (
         <div className="main">
           <div className="main-top">
             <p><img src={image} />影集制作</p>
             <p>{Music.username.nick}</p>
             <p>完成</p>
           </div>
           <div className="main-bottom">
             <p onClick={this.handleMyMusic1} className={this.changStyle1()}><img src={this.changeImage1()} />我的音乐</p>
             <p onClick={this.handleMyMusic2} className={this.changStyle2()}><img src={this.changeImage2()} />搜索音乐</p>
             <p onClick={this.handleMyMusic3} className={this.changStyle3()}><img src={this.changeImage3()} />上传音乐</p>
           </div>
         </div>
       );
     }
}
