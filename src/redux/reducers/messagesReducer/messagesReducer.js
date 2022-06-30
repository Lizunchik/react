import { StarTwoTone } from "@mui/icons-material";
import { ADD_MESSAGE, DELETE_MESSAGE } from "../../actionTypes";
const initialState = {
    messages: [
        {
            id:1,
            title: 'How are you?',
            chatId: 1
        },
        {
            id:2,
            title: 'Ok',
            chatId: 2
        },
    ]
}
export const messagesReducer = (state = initialState, action)=>{
    switch(action.type){
        case DELETE_MESSAGE:
            return{
                ...state,
                messages: state.messages.filter(e=> e.id !== action.payload)

            }
        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, action.payload]
            }

        default:
            return state;
    }
}