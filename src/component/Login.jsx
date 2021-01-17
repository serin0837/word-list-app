import React from "react";
import {GoogleLogin} from "react-google-login"

const clientId ='18802594293-vt53ef60po4ss20urmojebk49sa92lhs.apps.googleusercontent.com'


function Login(prop){
    const onSuccess =(res)=>{
        console.log('[Login Success] currentUser:',res.profileObj)
        prop.handleLogin(res.profileObj.googleId,res.profileObj.givenName)
    }

    const onFailure = (res)=>{
        console.log('[Login failed res:',res);
    }

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop:"100px"}}
            isSignedIn={true}></GoogleLogin>
        </div>
    )
}

export default Login

