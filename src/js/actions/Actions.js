import axios from 'axios';
import * as TYPE from './Types';
import * as PATH from '../helpers/Path';
import * as LOCALTOKEN from '../helpers/LocalToken';
import * as AXIOSDEFAULT from '../helpers/SetAxiosDefault';

const getHomeVideo = () => (dispatch) => {
    return axios.get('/')
      .then((res) => {
        return dispatch({ type: TYPE.SET_HOME_VIDEO, data: res.data });
      })
      .catch(error => dispatch(error));
}

const register = (requestBody) => (dispatch) => {
  return axios.post(PATH.SIGNUP, requestBody)
    .then((res) => {
      LOCALTOKEN.AddTokenToLocalStorage(res.data.token);
      AXIOSDEFAULT.setBaseUrl(res.data.token);
      return dispatch({ type: TYPE.SET_USER, data: res.data });
    })
    .catch(error => dispatch(error));
}

const login = (requestBody) => (dispatch) => {
  return axios.post(PATH.SIGNUP, requestBody)
  .then((res) => {
    LOCALTOKEN.AddTokenToLocalStorage(res.data.token);
    AXIOSDEFAULT.setBaseUrl(res.data.token);
    return dispatch({ type: TYPE.SET_USER, data: res.data });
  })
  .catch(error => dispatch(error));
}

const addMedia = (requestBody) => (dispatch) => {
  return axios.post(PATH.MEDIA, requestBody)
  .then((res) => {
    return dispatch({ type: TYPE.SET_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error));
}

const getMedia = (mediaId) => (dispatch) => {
  const endPoint = `${PATH.MEDIA}/media/${mediaId}`;
  return axios.get(endPoint)
  .then((res) => {
    return dispatch({ type: TYPE.SET_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error)); 
}


const getAllMedia = () => {
  return axios.get(PATH.MEDIA)
  .then((res) => {
    return dispatch({ type: TYPE.SET_ALL_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error));
}

const getMyMedia = () => (dispatch) => {
  const endPoint = `${PATH.MEDIA}/media/me`;
  return axios.get(endPoint)
  .then((res) => {
    return dispatch({ type: TYPE.SET_ALL_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error)); 
}

const getUserProfile = (userId) => (dispatch) => {
  const endPoint = `${PATH.PROFILE}/${userID}`;
  return axios.get(endPoint)
  .then((res) => {
    return dispatch({ type: TYPE.SET_CURRENT_PROFILE, data: res.data });
  })
  .catch(error => dispatch(error)); 
}


const getMyProfile = () => (dispatch) => {
  const endPoint = `${PATH.PROFILE}/me`;
  return axios.get(endPoint)
  .then((res) => {
    return dispatch({ type: TYPE.SET_CURRENT_PROFILE, data: res.data });
  })
  .catch(error => dispatch(error)); 
}

const addComment = (mediaId, requestBody) => (dispatch) => {
  const endPoint = `${PATH.MEDIA}/comment/${mediaId}`;
  return axios.post(endPoint, requestBody)
  .then((res) => {
    return dispatch({ type: TYPE.SET_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error));
}

const addRating = (mediaId, requestBody) => (dispatch) => {
  const endPoint = `${PATH.MEDIA}/rate/${mediaId}`;
  return axios.post(endPoint, requestBody)
  .then((res) => {
    return dispatch({ type: TYPE.SET_MEDIA, data: res.data });
  })
  .catch(error => dispatch(error));
}

export {
  addComment,
  addMedia,
  addRating,
  getAllMedia,
  getMedia,
  getMyMedia,
}

