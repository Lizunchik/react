import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DELETE_MESSAGE, ADD_MESSAGE } from '../redux/actionTypes';
import { getMessagesSelector } from '../redux/reducers/messagesReducer/messagesSelector';


const Messages = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const chatsMessages = useSelector(getMessagesSelector);
    const dispatch = useDispatch()
    const messages = chatsMessages.filter(e => {
        if (!id) return null;
        return e.chatId === +id;
    });

    const deleteMessage = (id) => {
        dispatch({
            type: DELETE_MESSAGE,
            payload: id
        }

        )
    }
    const addMessage = () => {
        const obj = {
            id: messages[messages.length - 1].id + 1,
            title: title,
            chatId: +id

        };
        dispatch({
            type: ADD_MESSAGE,
            payload: obj
        })
    };
    return (
        <div>
            <h5>Messages</h5>
            <input value={title} onChange={({ target }) => setTitle(target.value)}></input>
            <button onClick={addMessage}>+</button>
            {
                messages.map(e => (
                    <div key={e.id}>
                        <p >{e.title}</p>
                        <button onClick={() => deleteMessage(e.id)}>Delete</button>
                    </div>

                ))
            }
        </div>
    )
}

export default Messages;