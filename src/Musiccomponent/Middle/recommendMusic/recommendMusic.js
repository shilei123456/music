import React, { Component } from 'react';
import './recommendMusic.css';
import RecommendList from '../recommendList';

export default class recommendMusic extends Component {
  state = {
    currentRecommendId: 0,
    currentName: ''
  }
  componentDidMount() {
    const { Actions } = this.props;
    Actions.fatchRecommend('test85617');
  }

   handleRecommendSelect = (id, name, plp, index) => {
     const { handleIndex } = this.props;
     handleIndex && handleIndex(id, name, plp, index);
     if (id == this.state.currentIndex) {
       this.setState({
         currentIndex: 0,
         currentName: name
       });
     } else {
       this.setState({
         currentIndex: id,
         currentName: name
       });
     }
   }

  renderRecommendMusic=() => this.props.Music.recommendMusicList.map((item, idx) => (
    <RecommendList
      Music={this.props.Music}
      key={idx}
      item={item}
      index={idx}
      Actions={this.props.Actions}
      isShow={this.props.isShow}
      isPlay={this.props.isPlay}
      handleRename={this.props.handleRename}
      currentIndex={this.state.currentIndex}
      onhandleRecommendSelect={this.handleRecommendSelect}
    />
  ))
  render() {
    return (
      <div className="recommendMusic">
        <div className="recommendMusic-top">
          <h3><strong>推荐音乐</strong></h3>
        </div>
        <div className="recommendMusic-bottom">
          { this.renderRecommendMusic() }
        </div>
      </div>
    );
  }
}
