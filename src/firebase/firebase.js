// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBFtQiY6X-ns9-n6KV2DvL41zSVeosYiw",
  authDomain: "fir-react-portfolio.firebaseapp.com",
  projectId: "fir-react-portfolio",
  storageBucket: "fir-react-portfolio.appspot.com",
  messagingSenderId: "598341368307",
  appId: "1:598341368307:web:c38dc02ab5fbc981bc7a86",
  measurementId: "G-YBLD3WC8ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);