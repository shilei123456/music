import {
  RECOMMENDMUSIC_SUC, FETCH_RECOMMENDMUSIC_INFO_SUC,
  FETCH_NEWMUSIC_INFO_SUC, FETCH_Recommend_DELETE,
  FETCH_RECOMMEND_RENAME, FETCH_MULITIDELETE,
  FETCH_MULITI
} from '../const/ActionTypes';

const initialMessage = {
  username: {},
  recommendMusicList: [],
  myMusicList: [],
  recommendMusic: 1,
  myMusic: 2,
  arr: []

};
export default function Music(state = initialMessage, action) {
  switch (action.type) {
    case RECOMMENDMUSIC_SUC: {
      const username = action.response.data;
      return Object.assign({ }, state, { username });
      break;
    }
    case FETCH_RECOMMENDMUSIC_INFO_SUC: {
      const recommendMusicList = action.response.data.list;
      return Object.assign({ }, state, { recommendMusicList });
      break;
    }
    case FETCH_NEWMUSIC_INFO_SUC: {
      const myMusicList = action.response.data.list;
      return Object.assign({ }, state, { myMusicList });
      break;
    }
    case FETCH_Recommend_DELETE: {
      const Message = state.myMusicList.slice();
      for (let i = 0; i < state.myMusicList.length; i++) {
        if (state.myMusicList[i].name == action.value && state.myMusicList[i].plp === Number(action.plp)) {
          Message.splice(action.index, 1);
        }
      }
      const newState = { ...state };
      newState.myMusicList = Message;
      return newState;
      break;
    }
    case FETCH_MULITI: {
      const Message = state.myMusicList.slice();
      state.arr.push(action.id);
      const newState = { ...state };
      newState.myMusicList = Message;
      return newState;
      break;
    }
    case FETCH_MULITIDELETE: {
      const Message = state.myMusicList.slice();
      if (state.arr.length > 5) {
        alert('删除歌曲数不能大于5');
      } else {
        for (let i = 0; i < state.myMusicList.length; i++) {
          for (let j = 0; j < state.myMusicList.length; j++) {
            if (state.arr[i] === state.myMusicList[j].id) {
              Message.splice(j, 1);
            }
          }
        }
      }

      const newState = { ...state };
      newState.myMusicList = Message;
      return newState;
      break;
    }
    case FETCH_RECOMMEND_RENAME: {
      const renameMessage = state.recommendMusicList.slice();
      for (let i = 0; i < state.recommendMusicList.length; i++) {
        if (state.recommendMusicList[i].name == action.name) {
          state.recommendMusicList[i].name = action.value;
        }
      }
      const newState1 = { ...state };
      newState1.recommendMusicList = renameMessage;
      return newState1;
      break;
    }
    default:
      return state;
  }
}
