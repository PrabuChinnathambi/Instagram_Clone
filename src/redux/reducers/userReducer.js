import { ActionTypes } from '../contants/action_type'


const initialstate = {
    users: "prabu"
}


export const userReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CURRENTUSER:
            return state;
        // case ActionTypes.SET_CURRENTUSER:
        //     return state;
        // case ActionTypes.SET_CURRENTUSER:
        //     return state;
        default:
            return state;
    }
}