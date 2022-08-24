import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";
import { useUserContext } from "../../services/Authentication";

const clientId =
  "153124458187-5nif67kd7aupognsmu3k4vek9qc9n93l.apps.googleusercontent.com";



export function LoginWithGoogle() {
  //import from Authentication.jsx
  const { setLog } = useUserContext();

  //set navigation path to dashboard
  const navigate = useNavigate();

  function onSuccess(res) {
    console.log("Login success", res.profileObj);
    setLog(true);
    //Navigate to the private dashboard
    navigate(`/dashboard/${res.profileObj.googleId}`);
  }

  function onFailure(res) {
    console.log("Login failure", res);
  }

  return (
    <div
      id="signInButton"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login with Google"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
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