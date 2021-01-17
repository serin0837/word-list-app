let localStorage = window.localStorage;  

class Auth {
    constructor(){
        this.googleId = localStorage.getItem('googleId');
        this.givenName = localStorage.getItem('givenName');
        this.listener = () => {}
    }
    onLogin(googleId, givenName){
        localStorage.setItem("googleId", googleId)
        localStorage.setItem("givenName", givenName)
        this.googleId = googleId
        this.givenName = givenName
        this.listener(googleId, givenName)
    }
    onLogout(){
        localStorage.removeItem("googleId")
        localStorage.removeItem("givenName")
        this.googleId = null
        this.givenName = null
        this.listener(this.googleId, this.givenName) 
    }    
    setListener(listener){
        this.listener = listener
    }
}

export default new Auth()

