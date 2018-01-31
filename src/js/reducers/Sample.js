import { SET_SAMPLE } from '../actions/Types';

const initialState = {
  sample: [],
  media: {},
  allMedia: [],
  
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_SAMPLE:
      return action.data;
	default: return state;
  }
}
