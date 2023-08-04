import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserApi from "../../Api/UserApi"
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function NewPassword() {
    const navigate = useNavigate();

  const [isOpen, setOpen] = React.useState({
    openMsg: false,
    msg: "",
    statusAlert: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
        newPassword : data.get("newPassword")
    }
    const res = await UserApi.resetPassword(
        user.newPassword,
    )
    if (res.status === 200) {
        // setOpen({
        //   openMsg: true,
        //   msg: "Sign Up Success ! Please check your email, click on the link and then you can log in",
        //   statusAlert: "success",
        // });
        alert("Reset PassWord Success ! Please check your email, click on the link and then you can log in")
        setTimeout(() =>{
          navigate("/signin")
        },2000)
      }
      else {
        setOpen({
          openMsg: true,
          msg: data,
          statusAlert: "error",
        });
      }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
           
            <TextField
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="newPassword"
              type="password"
              id="newpassword"
              autoComplete="current-password"
            />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}