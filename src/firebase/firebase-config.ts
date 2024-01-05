import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXqLz3lX7TP9nGnEnMWJsIW6IcSI-mNOQ",
    authDomain: "shop-647dc.firebaseapp.com",
    projectId: "shop-647dc",
    storageBucket: "shop-647dc.appspot.com",
    messagingSenderId: "308600517598",
    appId: "1:308600517598:web:d755211a84738cb7e8a34f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
