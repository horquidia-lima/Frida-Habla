import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE

    apiKey: "AIzaSyBwxlRiBDERsVJxeNdScw9e9JGZPCHaO9Y",
    authDomain: "frida-habla-bc6e5.firebaseapp.com",
    projectId: "frida-habla-bc6e5",
    storageBucket: "frida-habla-bc6e5.appspot.com",
    messagingSenderId: "747953871151",
    appId: "1:747953871151:web:c97bfbf23af6b60e6069da"

};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();