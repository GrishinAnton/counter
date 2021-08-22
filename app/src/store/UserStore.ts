import { makeAutoObservable } from 'mobx';
import firebase from 'firebase';
import { firebase_app } from '../features/firebaseInit';

class UserStore {
  user: firebase.User | null;

  constructor() {
    makeAutoObservable(this);
    this.user = firebase_app.auth().currentUser;
  }

  signIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await firebase_app.auth().signInWithPopup(provider);
      this.user = user;
    } catch (e) {
      const errorMessage = e.message;
      throw Error(errorMessage);
    }

    // .then((result: any) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   // @ts-ignore
    //   // const token = result?.credential?.accessToken;
    //   // The signed-in user info.
    //   const { user } = result;
    //   console.log(user, 'user');
    //   this.user = user;
    //   // ...
    // })
    // .catch((error: any) => {
    //   // Handle Errors here.
    //   // console.log(error, 'error');
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    //   // The email of the user's account used.
    //   // const { email } = error;
    //   // The firebase.auth.AuthCredential type that was used.
    //   // const { credential } = error;
    //   // ...
    // });
  };
}

export default new UserStore();
