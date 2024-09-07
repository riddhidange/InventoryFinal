// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVwIZmhaefOxanhiKDGERGDaiFpOKjYtI",
  authDomain: "inventoryfinal-90758.firebaseapp.com",
  projectId: "inventoryfinal-90758",
  storageBucket: "inventoryfinal-90758.appspot.com",
  messagingSenderId: "710015210868",
  appId: "1:710015210868:web:42cf561c6807386f970821",
  measurementId: "G-4YXKKRGG1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}