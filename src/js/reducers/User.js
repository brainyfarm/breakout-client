import * as Type from '../actions/Types';


const User = (state={ isLoggedIn: false, error: 'Unable to login'}, action) => {
    switch(action.type) {
        case Type.SET_USER:
            return Object.assign({}, state, { isLoggedIn: true });
        default:
            return state
    }
}

export default User;
