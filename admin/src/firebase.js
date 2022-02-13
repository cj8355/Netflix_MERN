import firebase from "firebase";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflix-910ab.firebaseapp.com",
  projectId: "netflix-910ab",
  storageBucket: "netflix-910ab.appspot.com",
  messagingSenderId: "1098123053065",
  appId: "1:1098123053065:web:134803817637dfaf7210d8",
  measurementId: "G-0PMR5F0YXE"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
