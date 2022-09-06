import { useUserContext } from "./Authentication";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEBMldGRVw7qJA0sBBBWGN-Z2luhSNTIs",
  authDomain: "auth-5c768.firebaseapp.com",
  projectId: "auth-5c768",
  storageBucket: "auth-5c768.appspot.com",
  messagingSenderId: "5442997088",
  appId: "1:5442997088:web:c069da9b3d7d38369cac05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export function LoginWithGoogle() {
  const { setLog } = useUserContext();
  const navigate = useNavigate();

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const photo = result.user.photoURL;

        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("photo", photo);
        setLog(true);
        navigate(`/dashboard/${result.user.reloadUserInfo.localId}`);
      })
      .catch((err) => console.log(err));
  }
  return (
    <button
      type="button"
      className="login-with-google-btn"
      onClick={signInWithGoogle}
    >
      Sign in with Google
    </button>
  );
}
