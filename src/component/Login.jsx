import React from "react";
import { GoogleLogin } from "react-google-login"

const clientId = process.env.REACT_APP_API_KEY;

function Login(prop){
    const onSuccess = (res) => {
        prop.handleLogin(res.profileObj.googleId,res.profileObj.givenName)
    }

    const onFailure = (res)=>{
        console.log('[Login failed res:', res);
    }

    return (
        <div>
            <GoogleLogin
            clientId = {clientId}
            buttonText = "Login"
            onSuccess = {onSuccess}
            onFailure = {onFailure}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}></GoogleLogin>
        </div>
    )
}

export default Login