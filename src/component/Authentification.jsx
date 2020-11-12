import React from 'react';
import { useState } from 'react';
import Login from "./Login"
import Logout from "./Logout"
import auth from "../auth"

const Authentification = () => {
    const [isLogin,SetisLogin] = useState(false)
//use state accept intial
    const handleLogin= (googleId,givenName)=> {
        SetisLogin(true)
        auth.onLogin(googleId,givenName)
    }
    const handleLogout= ()=> {
        SetisLogin(false)
        auth.onLogout()
    }
    if(isLogin){
        return <Logout handleLogout={handleLogout}/>
    }else {
        return <Login handleLogin={handleLogin}/>
    };
};

export default Authentification;