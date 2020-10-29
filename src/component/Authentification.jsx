import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Login from "./Login"
import Logout from "./Logout"

const Authentification = () => {

    const [isLogin,SetisLogin] = useState(false)
//use state accept intial
    const handleLogin= ()=> {
        SetisLogin(true)
    }
    const handleLogout= ()=> {
        SetisLogin(false)
    }
    if(isLogin){
        return <Logout handleLogout={handleLogout}/>
    }else {
        return <Login handleLogin={handleLogin}/>
    };
};

export default Authentification;