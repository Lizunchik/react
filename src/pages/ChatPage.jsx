import React, { useState } from 'react';

const ChatPage = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'vasya',

        },
        {
            id: 2,
            name: 'petya',

        }
    ])
    return (
        <div>
            {
                chats.map(e=> (
                    <div key={e.id}>
                        <h3>{e.name}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default ChatPage;