import React from 'react';
import {useAppDispatch} from "../../app/hooks";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {logout} from "../../features/authSlice";
import {logoutFirebase} from "../../firebase/auth-service";
import {AUTH_USER} from "../../utils/constants";
import {useNavigate} from "react-router-dom";

const Logout = () =>
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    async function logoutFn()
    {
        await logoutFirebase();
        localStorage.removeItem(AUTH_USER);
        dispatch(logout());
        navigate('/');
    }
    return (
        <Box>
            <Button onClick={logoutFn}>Confirm logout</Button>
        </Box>
    );
};

export default Logout;