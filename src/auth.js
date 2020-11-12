//act as
let localStorage = window.localStorage;  

class Auth {
    constructor(){
        this.googleId= localStorage.getItem('googleId');
        this.givenName= localStorage.getItem('givenName');
        this.listener=()=>{}
    }
    onLogin(googleId,givenName){
        localStorage.setItem("googleId",googleId)
        localStorage.setItem("givenName",givenName)
        this.googleId=googleId
        this.givenName=givenName
        this.listener(googleId,givenName)
    }    
    setListener(listener){
        this.listener = listener
        //when login authentification,, we need to rerender so we use //
        //design pattern// observer pattern 
        //listen change common design pattern
    }
}

export default new Auth()

