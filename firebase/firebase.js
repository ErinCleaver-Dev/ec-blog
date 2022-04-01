import { FormControlUnstyledContext } from "@mui/material";
import * as firebase from "firebase/app";
import "firebase/auth";
import {getDatabase} from "firebase/database";

const firebaseConfig  =  {
    api: process.env.NEXT_PUBLIC_API_KEY,
    productID: process.env.NEXT_PUBLIC_PROJECT_ID,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET
};

const app =firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);
export {db, app}