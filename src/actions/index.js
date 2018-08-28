
import * as ActionTypes from '../const/ActionTypes';

export function fatchlogin(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.RECOMMENDMUSIC,
      endpoint: '/login',
      params: {
        mid
      }
    }
  };
}
export function fatchNewMusic(token) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_NEWMUSIC_INFO,
      endpoint: '/music/my_list',
      params: {
        token
      }
      // normailzerFun:response=> normalize(response.data, schemes.MUSICLIST)
    }
  };
}
export function fatchRecommend(token) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_RECOMMENDMUSIC_INFO,
      endpoint: '/music/recommend_list',
      params: {
        token
      }
      // normailzerFun:response=> normalize(response.data, schemes.MUSICLIST)
    }
  };
}

export function fetchDeleteRecommend(value, plp, index) {
  return {
    type: ActionTypes.FETCH_Recommend_DELETE,
    value,
    plp,
    index
  };
}

export function fetchMuliti(id) {
  return {
    type: ActionTypes.FETCH_MULITI,
    id
  };
}

export function fetchMulitiDelete() {
  return {
    type: ActionTypes.FETCH_MULITIDELETE
  };
}
export function fetchRename(name, value) {
  return {
    type: ActionTypes.FETCH_RECOMMEND_RENAME,
    name,
    value
  };
}
