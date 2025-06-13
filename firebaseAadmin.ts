import { getApps } from "firebase/app";
import admin from "firebase-admin"

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);
// it mean getApps length is 0 then we will enter the block 
if (!admin.apps.length){
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
}

const adminDB = admin.firestore();
export {adminDB}
