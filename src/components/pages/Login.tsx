import React from 'react';
import {useAppDispatch} from "../../app/hooks";
import LoginForm from "../forms/LoginForm";
import {login} from "../../features/authSlice";
import {LoginData} from "../../utils/types";
import {loginFirebase} from "../../firebase/auth-service";
import {AUTH_USER} from "../../utils/constants";
import { setCode } from '../../features/codeSlice';
import {useNavigate} from "react-router-dom";

const Login = () =>
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    async function loginFn(loginData: LoginData)
    {
        try
        {
            const email = await loginFirebase(loginData) as string;
            localStorage.setItem(AUTH_USER, email);
            dispatch(login(email));
            dispatch(setCode('OK'))
            navigate('/');
        } catch (e)
        {
            dispatch(setCode('Wrong credentials'))
        }
    }
    return <LoginForm submitFn={loginFn}/>;
};

export default Login;