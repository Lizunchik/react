import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            Home
            <Link to={'/chats'}>
                <h1>
                    Чаты
                </h1>
            </Link>

            <Link to={'/profile'}>
                <h1>
                    Профиль
                </h1>
            </Link>

        </div>
    );
};

export default HomePage;