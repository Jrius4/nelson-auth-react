import auth0 from "auth0-js";

const LoggedIn;
const LoggedOut;
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "nelson05.auth0.com",
    clientID: "uQ5o4rqtYqb3s99gTq5E4DrYtgepNSKl",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if(authResults && authResults.accessToken && authResults.idToken) {
        this.setSession(authResults);
      } else if(err) {
        console.log(err)
        LoggedIn = <Route path="/"/>
      }
    });
  };

  setSession = authResults => {
    localStorage.setItem('isLoggedIn', true)
    
    let expiresAt = authResults.expiresIn * 1000 + new Date().getTime();

    localStorage.setItem('access_token', authResults.accessToken)
    localStorage.setItem('id_token', authResults.idToken)
    localStorage.setItem('expires_at', expiresAt)

    //Redirect 
    LoggedIn = <Route path="/"/>
  };

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isLoggedIn');

    LoggedIn = <Route path="/"/>
  }

  isAuthenticated = () => {
    return new Date().getTime() < this.expiresAt;
  }
}
