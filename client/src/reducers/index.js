import { combineReducers } from 'redux';
import userInfo from './userInfo';
import modalControl from './modal'


export default combineReducers({
    userInfo,
    modalControl
})

