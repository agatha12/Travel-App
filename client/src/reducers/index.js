import { combineReducers } from 'redux';
import userInfo from './userInfo';
import modalControl from './modal'
import indexManager from './indexManager'


export default combineReducers({
    userInfo,
    modalControl,
    indexManager
})

