import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { registerInitiate } from '../redux/reducers/userReducer/userReducer';
import { userSelector } from '../redux/reducers/userReducer/userSelector';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const user = userSelector(userSelector);

    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        e.preventDedault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
    }
    return (
        <div>
            register
            <form onSubmit={handleSubmit}>
                <input value={displayName} type="text" onChange={({ target }) => setDisplayName(target.value)} />
                <input value={email} type="text" onChange={({ target }) => setEmail(target.value)} />
                <input value={password} type="text" onChange={({ target }) => setPassword(target.value)} />
                <input value={confirmPassword} type="text" onChange={({ target }) => setConfirmPassword(target.value)} />
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default RegisterPage;