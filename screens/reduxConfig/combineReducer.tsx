import {combineReducers} from 'redux';
import {loginAuth} from './slices/loginSlice';
import commanSlice from './slices/commanSlice';

const rootReducer = combineReducers({
  loginAuth: loginAuth,
  commanSlice: commanSlice,
});

export default rootReducer;
