import counterReducer from './counter';


import {combineReducers} from 'redux';


const combained = combineReducers({
    counter:counterReducer
})


export default combained;