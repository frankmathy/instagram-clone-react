import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyATc9qcWWugFOmIhpOmx3cQH_VI-zsCrGc',
  authDomain: 'instagram-clone-react-97629.firebaseapp.com',
  databaseURL: 'https://instagram-clone-react-97629.firebaseio.com',
  projectId: 'instagram-clone-react-97629',
  storageBucket: 'instagram-clone-react-97629.appspot.com',
  messagingSenderId: '756618917561',
  appId: '1:756618917561:web:e42f037713118c009e8d68',
  measurementId: 'G-NV2PQNXR36'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
