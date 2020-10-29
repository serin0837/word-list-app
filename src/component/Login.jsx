import React from "react";
import {GoogleLogin} from "react-google-login"

const clientId='1003655510490-n8lr0hcs9l5goq54nr12fefevnfmncma.apps.googleusercontent.com'


function Login(prop){
    const onSuccess =(res)=>{
        console.log('[Login Success] currentUser:',res.profileObj.googleId)
        prop.handleLogin()
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

