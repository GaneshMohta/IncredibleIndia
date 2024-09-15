import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAkQ4zRm1oMq1u6NYU1UzxFmwCZXFbzC5A",
    authDomain: "merabharat-97f8a.firebaseapp.com",
    databaseURL: "https://merabharat-97f8a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "merabharat-97f8a",
    storageBucket: "merabharat-97f8a.appspot.com",
    messagingSenderId: "250959873670",
    appId: "1:250959873670:web:704619217737789666b307",
    measurementId: "G-MBV5PXQWX0"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage =getStorage(app);

export {db, storage}
