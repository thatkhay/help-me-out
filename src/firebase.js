// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFJPth7HkOjPOodjgixLXAdfl55G_EycE",
  authDomain: "chrome-extension-storage-132dd.firebaseapp.com",
  projectId: "chrome-extension-storage-132dd",
  storageBucket: "chrome-extension-storage-132dd.appspot.com",
  messagingSenderId: "779589373318",
  appId: "1:779589373318:web:23c0d2722092164cda7007"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
