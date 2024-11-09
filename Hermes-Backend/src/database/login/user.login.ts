
import { getFirestore } from 'firebase-admin/firestore';
import { UserLogin } from '../../types/auth/user.login';



type PARAM_USER = Omit<UserLogin, "tokenSecret" | "loggedInAt" | "loggedOutAt" | "tokenDeleted" | "loggedOut">


export const createUserLogin = async (user: PARAM_USER) => {
  const db = getFirestore()
  const userLogin: UserLogin = {
    userEmail: user.userEmail,
    loggedOut: false,
    loggedInAt: new Date().getTime(),
    loggedOutAt: new Date().getTime(),
    ipAddress: user.ipAddress,
    tokenId: user.tokenId,
    tokenDeleted: false,
    device: user.device,
  }
  await db.collection("userLogin").doc(user.tokenId).set(userLogin);
}



export const findAndUpdateAllTokenAsDeleted = async (user: Omit<UserLogin, "tokenSecret" | "loggedInAt" | "loggedOutAt" | "tokenDeleted" | "loggedOut" | "tokenId">) => {
  const db = getFirestore();
  const snapshot = await db.collection("userLogin")
    .where('userEmail', '==', user.userEmail)
    .where('tokenDeleted', '==', false)
    .where('ipAddress', '==', user.ipAddress)
    .where('device', '==', user.device)
    .get();

  if (!snapshot.empty) {
    snapshot.forEach(async (doc) => {
      const logins = doc.data();
      if (logins) {
        await doc.ref.update({ tokenDeleted: true });
      }
    });
  }
}





export const findUserLoginByTokenId = async (tokenId: string) => {
  const db = getFirestore();
  const snapshot = await db.collection("userLogin").doc(tokenId).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as UserLogin;
}
