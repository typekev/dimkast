import * as FirebaseModule from "firebase";
import "firebase/firestore";
import firebaseConfig from "../../constants/Firebase";

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} = firebaseConfig;

let firebaseInitialized = false;

if (
  apiKey !== "null" &&
  authDomain !== "null" &&
  databaseURL !== "null" &&
  storageBucket !== "null" &&
  messagingSenderId !== "null"
) {
  console.log("process.env", firebaseConfig);
  FirebaseModule.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized
  ? FirebaseModule.database().ref()
  : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
