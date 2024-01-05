import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {signUpFirebase} from "../../firebase/auth-service";
import {useState} from "react";
import {Alert} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Copyright(props: any)
{
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.tel-ran.com/">
                Tel-Ran
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUpForm()
{
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        signUpFirebase({
            email: data.get('email') as string,
            password: data.get('password') as string,
        })
            .then(() => {
                setCode('Sign up success');
                navigate('/login');
            })
            .catch(() => setCode('Error, try again'))
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Sign Up</Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={()=>{navigate("/login") }}>
                                    Already have an account? Sign in
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                {code && <Alert severity='error'>{code}</Alert>}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
}