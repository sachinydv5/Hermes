import { getFirestore } from 'firebase-admin/firestore';
import { WISHLIST_DB_COLLECTION } from '../constants';
import { WishlistType } from '../../types/wishlist/wishlist';

export const getWishlist = async (userEmail: string) => {
  const db = getFirestore();
  const snapshot = await db.collection(WISHLIST_DB_COLLECTION).doc(userEmail).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as WishlistType;
}


export const addToWishlist = async (userEmail: string, productId: string) => {
  const db = getFirestore();
  const docRef = db.collection(WISHLIST_DB_COLLECTION).doc(userEmail);
  const doc = await docRef.get();
  if(doc.exists) {
    const data = doc.data() as WishlistType;
    data.wishlist.push(productId)
    await docRef.update(data)
  } else {
    const data: WishlistType = {
      wishlist: [productId]
    }
    await docRef.set(data);
  }
}

export const removeFromWishlist = async (userEmail: string, productId: string) => {
  const db = getFirestore();
  const docRef = db.collection(WISHLIST_DB_COLLECTION).doc(userEmail);
  const doc = await docRef.get();
  if(doc.exists) {
    const data = doc.data() as WishlistType;
    const updatedList = {
      wishlist : data.wishlist.filter(i => i !== productId)
    }
    // data.wishlist.push(productId)
    await docRef.update(updatedList)
  } else {
    // console.log("doc not exist")
    // const data: WishlistType = {
    //   wishlist: [productId]
    // }
    // await docRef.set(data);
  }
};
;
// export const addWishlist = async (config: UpdateAppConfig) => {
//   const db = getFirestore();
//   const docRef = db.collection(APPCONFIG_DB_COLLECTION).doc(APPCONFIG_COLLECTION_ID);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       await docRef.update(filteredConfig);
//     } else {
//       await docRef.set(filteredConfig);
//     }
// };
