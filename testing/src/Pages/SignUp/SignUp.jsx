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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import UserApi from "../../Api/UserApi"
import * as Yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";


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

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
  .max(50, "Must be less than 50 characters or greater")
  .required("Required"),

lastName: Yup.string()
  .max(50, "Must be less than 50 characters or greater")
  .required("Required"),

userName: Yup.string()
  .min(6, "Must be between 6 and 50 characters")
  .max(50, "Must be between 6 and 50 characters")
  .required("Required")
  .test(
    "checkExistUserName",
    "This UserName is already registered.",
    async (username) => {
      // call api
      const isExists = await UserApi.existsByUsername(username);
      return !isExists;
    }
  ),

email: Yup.string()
  .email("Invalid email address")
  .required("Required")
  .test(
    "checkExistEmail",
    "This email is already registered.",
    async (email) => {
      // call api
      const isExists = await UserApi.existsByEmail(email);
      return !isExists;
    }
  ),

password: Yup.string()
  .min(6, "Must be between 6 and 50 characters")
  .max(50, "Must be between 6 and 50 characters")
  .required("Required"),

// confirmPassword: Yup.string()
//   .required("Required")
//   .oneOf([Yup.ref("password")], "Confirm Password do not match"),
});

export default function SignUp(props) {


  const [isOpen, setOpen] = React.useState({
    openMsg: false,
    msg: "",
    statusAlert: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async  (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    const user = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      userName :data.get("userName"),
      email : data.get("email"),
      password : data.get("password"),
    }
   
    console.log(user);
    let res = await UserApi.create(
      user.firstName,
      user.lastName,
      user.userName,
      user.email,
      user.password,
    );
   
    
    if (res.status === 200) {
      // setOpen({
      //   openMsg: true,
      //   msg: "Sign Up Success ! Please check your email, click on the link and then you can log in",
      //   statusAlert: "success",
      // });
      alert("Sign Up Success ! Please check your email, click on the link and then you can log in")
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                //   autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to={"/signin"} variant="body2">
                  Already have an account? Sign in
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
   
    </ThemeProvider>
  );
}