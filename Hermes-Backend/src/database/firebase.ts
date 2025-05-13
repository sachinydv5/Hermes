import { FirebaseApp, initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { config } from '../configs/env.config';
import { getStorage } from 'firebase-admin/storage';
import { cert, initializeApp as ia, getApps} from 'firebase-admin/app';
import { getFirestore as gf} from 'firebase-admin/firestore';
// import { cert, initializeApp as initializeAdminApp, getApps } from 'firebase-admin/app';

// import serviceAccount from '../../firebase-admin.json';

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let firestoreDB: Firestore;

const initializeDatabase = () => {
  try {
    ia({
      credential: cert(config.FIREBASE_ADMIN as any),
      storageBucket: config.FIREBASE_STORAGE_BUCKET,
    })
    app = initializeApp(firebaseConfig);
    firestoreDB = getFirestore();
    return app;
  } catch (err) {
    console.log("DB error initialization:" + err);
  }
}

const getFirestoreApp = () => app;
const getFirestoreDB = () => firestoreDB;
const getFirebaseStorage = () => {
  if (!getApps().length) {
    throw new Error("Firebase Admin not initialized. Call initializeDatabase() first.");
  }
  return getStorage().bucket();
};
export { initializeDatabase, getFirestoreApp, getFirebaseStorage, getFirestoreDB };
