import { FETCH_USER } from '../actions/types';

// This the is the section for the authentication and the other reducers.
export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;

		default:
			return state;
	}
};
