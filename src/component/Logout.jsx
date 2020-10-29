import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId= '1003655510490-n8lr0hcs9l5goq54nr12fefevnfmncma.apps.googleusercontent.com'

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