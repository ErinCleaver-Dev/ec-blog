import * as firebase from "firebase/app";
import "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig  =  {
    api: process.env.API_KEY,
    productID: process.env.PROJECT_ID,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.STORAGE_BUCKET
};

const app =firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);
export {db, app}