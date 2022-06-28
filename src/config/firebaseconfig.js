import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {

 apiKey: "AIzaSyCYr_aGjKM8IsyXrnmP2TNkVQj67cN2ArQ",

 authDomain: "utfevents-afd17.firebaseapp.com",

 projectId: "utfevents-afd17",

 storageBucket: "utfevents-afd17.appspot.com",

 messagingSenderId: "820957610422",

 appId: "1:820957610422:web:13f48dbe968920e49a4117"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database