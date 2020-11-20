import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import logoTec from '../../assets/img/logo.png';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../firebase';
import { Carousel } from "react-bootstrap";

export const firebaseApp = firebaseConfig;
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
        <div className="container-fluid" style={{width: '102%', backgroundColor: '#1e2127'}}>
          <div className="row" style={{height: '500px', width: '100%', color: 'white', fontWeight: '600'}}><div className="col">
              <div className="card-body" style={{maxHeight: '355px', overflowY: 'auto', margin: '50px', textAlign: 'center', fontSize: '24px'}}>
              <img src={logoTec} style={{height: '80px'}} alt="Tec"/>
              {
                  user
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
                }

                {
                  user
                    ? <button type="submit" className="btn btn-primary"onClick={signOut}>Sign out</button>
                    : <button type="submit" className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
                }
              </div>
            </div>
          </div>
        </div>
      <Carousel style={{margin: '10px 200px 0px 200px'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://tec.mx/sites/default/files/repositorio/Home/rectoria-tec-de-monterrey-regreso-consciente.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.atletasla.com/wp-content/uploads/2017/07/mural.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tec.mx/sites/default/files/styles/header_full/public/2019-02/portada-rectoria.jpg?itok=cFFPUsHw"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
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