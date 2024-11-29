import { FirebaseApp, initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { config } from '../configs/env.config';

import { cert, initializeApp as ia} from 'firebase-admin/app';
import { getFirestore as gf} from 'firebase-admin/firestore';

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
    // console.log(serviceAccount)
    ia({
      credential: cert(config.FIREBASE_ADMIN as any)
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

// async function closeConnection() {
//     try {
//       await mongoose.disconnect()
//       console.log("Database connection closed");
//     } catch (error) {
//       console.error("Error closing the database connection:", error);
//       process.exit(1);
//     }
//   }


//   process.on('SIGINT', closeConnection); // Handle termination signals
//   process.on('SIGTERM', closeConnection);

//   export { connectToDatabase, closeConnection };


export { initializeDatabase, getFirestoreApp, getFirestoreDB };
