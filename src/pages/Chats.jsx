import React from 'react';
import { useSelector } from 'react-redux';
import { getChatsSelector } from '../redux/reducers/chatsReducer/chatsSelector';
import {Link} from 'react-router-dom';

const Chats = () => {
    const chats = useSelector(getChatsSelector)
    return (
        <div>
           <h5>Chats</h5> 
            <div>
                {
                    chats.map(e => (
                        <Link key={e.id} to={`/messages/${e.id}`}>
                            <h3>{e.name}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Chats;