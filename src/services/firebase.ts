import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { environment } from '../environment/local';

const firebaseConfig = {
  apiKey: environment.REACT_APP_FIREBASE_APIKEY,
  authDomain: environment.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: environment.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: environment.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: environment.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: environment.REACT_APP_FIREBASE_APPID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
