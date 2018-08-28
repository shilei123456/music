import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './newMusicList.css';
import SelectImage from '../../source/select_music.png';

export default class recommendList extends Component {
    state={
      isChecked: false
    }
findId = () => {
  this.setState({
    isChecked: !this.state.isChecked
  });
  const {
    onhandleSelect, item, index, Actions
  } = this.props;
  onhandleSelect && onhandleSelect(item.id, item.name, item.plp, index);
  Actions.fetchMuliti(item.id);
}
 play = () => {
   const { item, isPlay } = this.props;
   if (isPlay && this.props.currentIndex === item.id) {
     return <audio ref="audio" src={item.m_url} autoPlay="autoPlay" />;
   }
   return null;
 }

 renderContent = () => {
   const { value, item } = this.props;
   if (value === 2) {
     return (
       <div className="newList">
         <p onClick={this.findId}><Checkbox checked={this.state.isChecked} />&nbsp;&nbsp;{item.name}
           {this.play()}
         </p>
       </div>
     );
   }
   return (
     <div className="newList">
       <p onClick={this.findId}><img
         className={this.props.currentIndex === item.id ? 'ShowSelectMusic' : 'hiddenSelectMusic'}
         src={SelectImage}
       />&nbsp;&nbsp;{item.name}
         {this.play()}
       </p>
     </div>
   );
 }
 render() {
   return (
     <div>
       { this.renderContent() }
     </div>
   );
 }
}
