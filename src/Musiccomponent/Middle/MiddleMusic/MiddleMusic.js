import React, { Component } from 'react';
import NewMusic from '../newMusic/newMusic';
import RecommendMusic from '../recommendMusic/recommendMusic';

// const MiddleMusic = () => (
//   <div>
//     <NewMusic
//       Music={this.props.Music}
//       Actions={this.props.Actions}
//       handleIndex={this.props.handleIndex}
//       currentIndex={this.props.currentIndex}
//       isPlay={this.props.isPlay}
//       value={this.props.value}
//     />
//     <RecommendMusic
//       Music={this.props.Music}
//       Actions={this.props.Actions}
//       handleIndex={this.props.handleIndex}
//       currentIndex={this.props.currentIndex}
//       isPlay={this.props.isPlay}
//       isShow={this.props.isShow}
//       handleRename={this.props.handleRename}
//     />
//   </div>
// );

// export default MiddleMusic;

export default class MiddleMusic extends Component {
  render() {
    return (
      <div>
        <NewMusic
          Music={this.props.Music}
          Actions={this.props.Actions}
          handleIndex={this.props.handleIndex}
          currentIndex={this.props.currentIndex}
          isPlay={this.props.isPlay}
          value={this.props.value}
        />
        <RecommendMusic
          Music={this.props.Music}
          Actions={this.props.Actions}
          handleIndex={this.props.handleIndex}
          currentIndex={this.props.currentIndex}
          isPlay={this.props.isPlay}
          isShow={this.props.isShow}
          handleRename={this.props.handleRename}
        />
      </div>
    );
  }
}

