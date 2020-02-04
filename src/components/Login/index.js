import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ExitToApp from "@material-ui/icons/ExitToApp";

import firebase from "../../initializers/firebase";
import { useAuth } from "../../context";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center"
  }
}));

const Login = () => {
  const {
    state: { currentUser, isAuth },
    loginUser,
    setIsAuth,
    userSignout
  } = useAuth();
  const { container } = useStyles();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      user =>
        !currentUser &&
        user &&
        loginUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        })
    );
  }, [currentUser, loginUser, setIsAuth]);

  const onLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        if (res) {
          const {
            credential: { accessToken },
            user: { displayName, photoURL, email }
          } = res;

          setIsAuth(accessToken);
          loginUser({
            displayName,
            photoURL,
            email
          });
        }
      })
      .catch(err => console.log(err));
  };

  const onLogout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => userSignout());

  return (
    <div className={container}>
      {isAuth ? (
        <>
          <Avatar src={currentUser && currentUser.photoURL} />
          <IconButton color="inherit" onClick={onLogout}>
            <ExitToApp />
          </IconButton>
        </>
      ) : (
        <Button variant="contained" onClick={onLogin}>
          Log in with Google
        </Button>
      )}
    </div>
  );
};

export default Login;
