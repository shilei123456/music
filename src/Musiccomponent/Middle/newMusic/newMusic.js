import React, { Component } from 'react';
import './newMusic.css';
import NewMusicList from '../newMusicList';

export default class newMusic extends Component {
  state={
    currentIndex: 0
  }
  componentDidMount() {
    const { Actions } = this.props;
    Actions.fatchlogin(108);
    Actions.fatchNewMusic('test85617');
  }

 handleSelect = (id, name, plp, index) => {
   const { handleIndex } = this.props;
   handleIndex && handleIndex(id, name, plp, index);
   if (id == this.state.currentIndex) {
     this.setState({
       currentIndex: 0
     });
   } else {
     this.setState({
       currentIndex: id
     });
   }
 }

  renderMyMusic=() => this.props.Music.myMusicList.map((item, idx) => (
    <NewMusicList
      Music={this.props.Music}
      key={idx}
      item={item}
      index={idx}
      Actions={this.props.Actions}
      value={this.props.value}
      isPlay={this.props.isPlay}
      currentIndex={this.state.currentIndex}
      onhandleSelect={this.handleSelect}
    />
  ))
  render() {
    const { Music } = this.props;
    return (
      <div className="newMusic">
        <div className="newMusic-top">
          <h3><strong>我的音乐</strong><span className="name">{Music.username.mid}</span></h3>
        </div>
        <div className="newMusic-bottom">
          { this.renderMyMusic() }
        </div>
      </div>
    );
  }
}
