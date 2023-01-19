import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environment/local';

const firebaseConfig = {
  apiKey: environment.REACT_APP_FIREBASE_APIKEY,
  authDomain: environment.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: environment.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: environment.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: environment.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: environment.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
