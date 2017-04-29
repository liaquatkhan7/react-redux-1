import {combineReducers} from 'redux';

import UserReducer from './reducer-user';
import ActiveUserReducer from './reducer-active-user';
import MovieReducer from './reducer-movie';

const allReducers = combineReducers({
    users: UserReducer,
    movie: MovieReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;