import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {loginInitiate} from '../redux/reducers/userReducer/userReducer';
import { userSelector } from '../redux/reducers/userReducer/userSelector';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch;
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    }, [user, navigate])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email, password));
    }
    return (
        <div>
            login
            <form onSubmit={handleSubmit}>

                <input value={email} type="text" onChange={({ target }) => setEmail(target.value)} />
                <input value={password} type="text" onChange={({ target }) => setPassword(target.value)}/>
                <button type='submit'>sign in</button>
            </form>
        </div>
    )
}

export default LoginPage;