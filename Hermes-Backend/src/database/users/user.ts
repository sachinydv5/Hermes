// import { collection, getFirestore } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
// import { doc, setDoc } from 'firebase/firestore';
import { User } from "../../types/user/user";
import { getFirestore } from 'firebase-admin/firestore';


export const createUserWithEmailAndPassword = async (email: string, password: string, firstName: string, lastName: string) => {
  const db = getFirestore()
  const user: User = {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName,
    display_name: `${firstName} ${lastName}`,
    is_email_verified: false,
    user_id: uuidv4()
  }
  await db.collection("users").doc(email).set(user);
  return user;
}

export const findUserByEmail = async (email: string) => {
  const db = getFirestore();
  const snapshot = await db.collection("users").doc(email).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as User;
}

export const findUserByUserId = async (userId: string) => {
  const db = getFirestore();
  const snap = await db.collection("users").get();
  // snap.forEach(doc => {
  //   console.log(doc.id, '=>', doc.data());
  // });
  const snapshot = await db.collection("users").doc(userId).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as User;
}
