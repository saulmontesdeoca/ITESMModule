import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from '../../firebase';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
            {
              user && <Redirect to="/home" />
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
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);