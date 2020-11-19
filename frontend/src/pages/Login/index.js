import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../firebase';

const firebaseApp = firebaseConfig;
const db = firebaseApp.firestore();

export { db };

async function addUser (user) {
  if(user){
  // adding data here
  let data = {
    email: user.email,
    name: user.displayName,
    profilePicture: user.photoURL,
  }
  db.collection("users-dev")
    .doc(user.email)
    .set(data)
    .then(() => {
      console.log("A new user has been added", "Success");
      window.location = "/home";
    })
    .catch(error => {
      console.log(error.message, "Create user failed");
      this.setState({ isSubmitting: false });
    });
  }
};

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      console.log(user)
      addUser(user)
      return (
        <div>
            {
              user
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
  
            {
              user
                ? <button type="submit" className="btn btn-dark btn-lg btn-block"onClick={signOut}>Sign out</button>
                : <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={signInWithGoogle}>Sign in with Google</button>
            }
        </div>
        
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);