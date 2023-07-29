// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "---add your apiKey here---",
  authDomain: "---add your authDomain here---",
  projectId: "---add your projectId here---",
  storageBucket: "---add your storageBucket here---",
  messagingSenderId: "---add your messagingSenderId here---",
  appId: "---add your appId here---",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
