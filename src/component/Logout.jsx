import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = process.env.REACT_APP_API_KEY;

function Logout(prop){
    const onSuccess = () => {
        alert("Logout made successfully")
        prop.handleLogout()
    }

return (
    <div>
        <GoogleLogout
        clientId = {clientId}
        buttonText = "Logout"
        onLogoutSuccess = {onSuccess}></GoogleLogout>
    </div>
    )
}

export default Logout;