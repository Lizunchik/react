import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducers/userReducer/userReducer';

const HomePage = () => {
    const dispatch = useDispatch();
    const logout = ()=>{
        dispatch(logoutInitiate)
    }
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
        <button onClick={logout}>Exit</button>
        </div>
    );
};

export default HomePage;