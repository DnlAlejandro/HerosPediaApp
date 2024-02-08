import React from 'react';
import { AuthContext } from './AuthContext';
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
    const user = JSON.parse(localStorage.getItem('name'));

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const onLogin = (name = '') => {

        const user = name;

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('name', JSON.stringify(user));

        dispatch(action);
    }

    const onLogout = () => {
        localStorage.removeItem('name');
        const action = {
            type: types.logout
        };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: onLogin,
            logout: onLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
