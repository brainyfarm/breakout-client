import axios from 'axios';
import { SET_SAMPLE } from './Types';


class Actions {
  static setSample(data) {
    return { 
      type: SET_SAMPLE,
      data
    };
  }
}

export const sampleAction = () => (dispatch) => {
    return axios.get('https://andela-dms.herokuapp.com/')
      .then((res) => {
        return dispatch(Actions.setSample(res.data));
      })
      .catch(error => dispatch(error));
}
