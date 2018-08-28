import React, { Component } from 'react';
import './Bottom.css';
import image1 from '../../source/button_new_play_gray.png';
import imagered1 from '../../source/button_new_play.png';
import imagered2 from '../../source/button_rename_red.png';
import imagered3 from '../../source/button_cut.png';
import imagered4 from '../../source/button_share.png';
import imagered5 from '../../source/button_delete.png';

export default class Bottom extends Component {
startStop = () => {
  const { handlePlay } = this.props;
  handlePlay && handlePlay();
}
rename = () => {
  const { handleRename } = this.props;
  handleRename && handleRename();
}
handleFriends = () => {
  const { currentName } = this.props;
  window.alert(`送给朋友一首 ${currentName}`);
}
hangleDelete = () => {
  const {
    Actions, currentName, plp, index, value
  } = this.props;
  if (value === 1) {
    Actions.fetchDeleteRecommend(currentName, plp, index);
  } else {
    Actions.fetchMulitiDelete();
  }
}
render() {
  const { currentIndex } = this.props;
  return (
    <div className="Bottom">
      <div className="BottomItem">
        <img onClick={this.startStop} src={currentIndex === 0 ? image1 : imagered1} />
        <p>播放</p>
      </div>
      <div className="BottomItem">
        <img onClick={this.rename} src={currentIndex !== 0 ? imagered2 : image1} />
        <p>重命名</p>
      </div>
      <div className="BottomItem">
        <img src={currentIndex === 0 ? image1 : imagered3} />
        <p>选择片段</p>
      </div>
      <div className="BottomItem">
        <img onClick={this.handleFriends} src={currentIndex === 0 ? image1 : imagered4} />
        <p>送给朋友</p>
      </div>
      <div className="BottomItem">
        <img onClick={this.hangleDelete} src={currentIndex === 0 ? image1 : imagered5} />
        <p>删除</p>
      </div>
    </div>
  );
}
}
