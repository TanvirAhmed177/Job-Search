import React, { useContext } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import googleLogo from "../../../images/Google Logo.png";
import { useHistory, useLocation } from "react-router";
import Navbar from "../../Shared/Navbar/Navbar";
import { UserContext } from "../../../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Google Sign in method

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { userName: displayName, email };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        storeAuthToken();

        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="bg">
      <Navbar></Navbar>
      <div className="login-box">
        <h1 className="text-info">Login Here</h1>

        <button
          style={{
            marginBottom: "4%",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "20px",
            width: "100%",
            lineHeight: "30px",
          }}
          onClick={handleGoogleSignIn}
        >
          <img src={googleLogo} alt="" width="30px" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
