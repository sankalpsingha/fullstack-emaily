// This will export all the reducers
import { combineReducers } from 'redux';

import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer
});
