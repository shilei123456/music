import React, { Component } from 'react';
import { Modal } from 'antd';
import './recommendList.css';
import SelectImage from '../../source/select_music.png';

export default class recommendList extends Component {
  state = { visible: true }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  handleCancel = e => {
    this.setState({
      visible: false
    });
  }

  findRecommendId = () => {
    const { onhandleRecommendSelect, item, index } = this.props;
    onhandleRecommendSelect && onhandleRecommendSelect(item.id, item.name, item.plp, index);
  }
   play = () => {
     const { item, isPlay } = this.props;
     if (isPlay && this.props.currentIndex === item.id) {
       return (
         <div>
           <Modal
             title="正在播放音乐"
             visible={this.state.visible}
             onOk={this.handleOk}
             onCancel={this.handleCancel}
           >
             <p>{item.name}</p>
             <audio ref="audio" src={item.m_url} autoPlay="autoPlay" controls="controls" />
           </Modal>
         </div>
       );
     }
     return null;
   }
  handleOkRename = () => {
    const { item, Actions, handleRename } = this.props;
    handleRename && handleRename();
    Actions.fetchRename(item.name, this.refs.input1.value);
    this.setState({
      visible: false
    });
  }
 handleCancelRename = () => {
   const { handleRename } = this.props;
   handleRename && handleRename();
   this.setState({
     visible: false
   });
 }
  rename = () => {
    const { item, isShow } = this.props;
    if (isShow == true && this.props.currentIndex === item.id) {
      return (
        <div>
          <Modal
            title="歌曲名重命名"
            visible={this.state.visible}
            onOk={this.handleOkRename}
            onCancel={this.handleCancelRename}
          >
                    请输入新歌名&nbsp;:&nbsp;<input type="text" ref="input1" placeholder={item.name} className="date1" />
          </Modal>
        </div>
      );
    }
    return null;
  }
  render() {
    const { item } = this.props;
    return (
      <div className="recomList">
        <p onClick={this.findRecommendId}><img className={this.props.currentIndex === item.id ? 'ShowSelectMusic' : 'hiddenSelectMusic'} src={SelectImage} />
          {item.name}
        </p>
        { this.play() }
        { this.rename() }
      </div>
    );
  }
}
