// Initialize Firebase
import firebase from 'firebase';
import { firebaseConfig } from './config';

export const firebase_app = firebase.initializeApp(firebaseConfig);
