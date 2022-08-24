import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "153124458187-5nif67kd7aupognsmu3k4vek9qc9n93l.apps.googleusercontent.com";

export function LoginWithGoogle() {

    function onSuccess(res) {
        console.log("Login success", res.profileObj)
    }

    function onFailure(res) {
        console.log('Login failure', res)
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText={'Login'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
          </div>
      )
}
  
export function LogoutWithGoogle() {
  function onSuccess(res) {
    console.log("Login success", res.profileObj);
  }

  function onFailure(res) {
    console.log("Login failure", res);
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}