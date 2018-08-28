import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import TopBar from '../Musiccomponent/TopBar/TopBar';
import NavBar from '../Musiccomponent/NavBar/NavBar';
import MiddleMusic from '../Musiccomponent/Middle/MiddleMusic/MiddleMusic';
import Bottom from '../Musiccomponent/BottomBar/Bottom';

class MusicHome extends Component {
    state = {
      isPlay: false,
      currentIndex: 0,
      currentName: '',
      index: '',
      plp: '',
      isShow: false,
      value: 1
    }

  onhandleIndex = (idx, name, plp, index) => {
    if (idx === this.state.currentIndex) {
      this.setState({
        currentIndex: 0,
        currentName: name,
        plp,
        index
      });
    } else {
      this.setState({
        currentIndex: idx,
        isPlay: false,
        currentName: name,
        plp,
        index
      });
    }
  }

  onhandlePlay = () => {
    this.setState({
      isPlay: !this.state.isPlay
    });
  }
onhandleRename =() => {
  this.setState({
    isShow: !this.state.isShow
  });
}
onhandleMultiple = v => {
  this.setState({
    value: v
  });
}
onhandleRenameh = () => {
  this.setState({
    isShow: false
  });
}
render() {
  const { Music, Actions } = this.props;
  return (
    <div>
      <TopBar Music={Music} Actions={Actions} />
      <NavBar handleMultiple={this.onhandleMultiple} value={this.state.value} />
      <MiddleMusic
        Music={Music}
        Actions={Actions}
        handleIndex={this.onhandleIndex}
        currentIndex={this.state.currentIndex}
        isPlay={this.state.isPlay}
        isShow={this.state.isShow}
        value={this.state.value}
        handleRename={this.onhandleRenameh}
      />
      <Bottom
        Actions={Actions}
        handlePlay={this.onhandlePlay}
        handleRename={this.onhandleRename}
        currentName={this.state.currentName}
        currentIndex={this.state.currentIndex}
        idx={this.state.currentIndex}
        index={this.state.index}
        plp={this.state.plp}
        value={this.state.value}
      />
    </div>
  );
}
}

function mapStateToProps(state) {
  const { Music } = state;
  return { Music };
}
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(actionCreators, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MusicHome);
