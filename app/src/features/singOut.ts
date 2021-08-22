import firebase from 'firebase';

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log('singOut');
    })
    .catch(error => {
      // An error happened.
    });
};
