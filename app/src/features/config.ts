export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'entityapp-4d17a.firebaseapp.com',
  databaseURL: 'https://entityapp-4d17a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'entityapp-4d17a',
  storageBucket: 'entityapp-4d17a.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export enum EActions {
  GET_COUNTS = 'counts',
}
