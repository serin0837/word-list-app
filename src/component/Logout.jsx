import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId= '18802594293-vt53ef60po4ss20urmojebk49sa92lhs.apps.googleusercontent.com'

function Logout(prop){
    const onSuccess=()=>{
        alert("Logout made successfully")
        prop.handleLogout()
    }


return (
    <div>
        <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}></GoogleLogout>
    </div>
)
}

export default Logout;