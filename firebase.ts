// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk4ja1d5Od0zfuC46EGfpPDWAUfNRcfQg",
  authDomain: "chatgpt-clone-3c147.firebaseapp.com",
  projectId: "chatgpt-clone-3c147",
  storageBucket: "chatgpt-clone-3c147.firebasestorage.app",
  messagingSenderId: "716705348670",
  appId: "1:716705348670:web:784bcca992ceb9fb58a56f"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };



// getApps():Retrieves an array of all initialized Firebase app instances in the current environment.
// If the length of this array is greater than 0, it indicates that at least one Firebase app is already initialized.

// initializeApp(firebaseConfig):Initializes a new Firebase app with the given firebaseConfig object.
// firebaseConfig contains your Firebase project's configuration, such as apiKey, authDomain, projectId, etc.

// getApp():Retrieves the default Firebase app instance. default instance is , that instance that has been initialized without any name. 
// Used when you know the Firebase app has already been initialized.

// Conditional Logic:If there are already initialized apps (getApps().length > 0), it fetches the existing app using getApp().
// Otherwise, it initializes a new app using initializeApp(firebaseConfig).


