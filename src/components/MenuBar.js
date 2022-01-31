import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginDialog from "./LoginDialog";
import cookies from "react-cookies";

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);
  //js truthy, "!!" converts any object to boolean, checks if exists
  const hasLoggedIn = !!cookies.load("jwt_token");
  const loginTag = hasLoggedIn ? "LogOut" : "LogIn";

  const handleClickOpen = () => {
    //if user already logged in
    if(hasLoggedIn){
      cookies.remove("jwt_token");
      window.location.reload();
    }
    //if user has not logged in
    else{
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Enrollment System
          </Typography>
          <Button color="inherit" component={ Link } to="/">All Courses</Button>
          <Button color="inherit" component={ Link } to="/enrolled-courses">Enrolled Courses</Button>
          <Button color="inherit" onClick={handleClickOpen}>{ loginTag }</Button>
        </Toolbar>
        <LoginDialog handleClose={handleClose} open={open}/>
      </AppBar>
    </Box>
  );
}