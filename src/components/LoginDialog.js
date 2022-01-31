import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField} from "@mui/material";
import {JwtService} from "../service/JwtService";
import cookies from "react-cookies";

export default function LoginDialog(props) {
    let username;
    let password;

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Please login
                </DialogTitle>
                <DialogContent>
                    <TextField fullWidth label="Username" variant="standard" fullWidth autoFocus onChange={e => username = e.target.value}/>
                    <TextField fullWidth label="Password" variant="standard" fullWidth type="password" onChange={e => password = e.target.value}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.propshandleClose}>Cancel</Button>
                    <Button onClick={login}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function login() {
        JwtService.authenticate(username, password)
            .then(response =>{
                //save Jwt token to cookies
                cookies.save("jwt_token", response.data.id_token);//cookies is similar to hashmap
                window.location.reload();//equivalent to "refresh page" in the browser
            })
            .catch(error => console.error(error));
    }
}
