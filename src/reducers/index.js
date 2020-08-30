import { combineReducers } from 'redux';
import changeHandler from './changeHandler';

const allReducers = combineReducers({
	changeHandler,
});

export default allReducers;
