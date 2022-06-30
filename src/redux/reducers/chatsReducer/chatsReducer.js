import { GET_MESSAGES } from "../../actionTypes";

const initialState = {
    chats: [
        {
            id: 1,
            name: 'vasya'

        },
        {
            id: 2,
            name: 'petya'

        },
        {
            id: 3,
            name: 'vova'

        },

    ]
}
export const chatsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_MESSAGES:
            return {
                ...state,
                chats: state.chats
            }
        default:
            return state;
    }
}