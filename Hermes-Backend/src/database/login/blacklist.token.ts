


import { getFirestore } from 'firebase-admin/firestore';
import { BlacklistToken } from '../../types/auth/user.login';





export const findBlackListedByTokenId = async (tokenId: string) => {
  const db = getFirestore();
  const snapshot = await db.collection("blacklistToken").doc(tokenId).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as BlacklistToken;
}







export const createBlackListToken = async (token: string) => {
  const db = getFirestore()
  const bToken: BlacklistToken = {
      token: token,
      createdAt: new Date(),
      updatedAt: new Date()
  }
  await db.collection("blacklistToken").doc(token).set(bToken);
}


