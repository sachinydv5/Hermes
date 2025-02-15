import { getFirestore } from 'firebase-admin/firestore';
import { CART_DB_COLLECTION } from '../constants';
import { CartType } from '../../types/cart/cart';

export const getCart = async (userEmail: string) => {
  const db = getFirestore();
  const snapshot = await db.collection(CART_DB_COLLECTION).doc(userEmail).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as CartType;
}


export const addToCart = async (userEmail: string, productId: string) => {
  const db = getFirestore();
  const docRef = db.collection(CART_DB_COLLECTION).doc(userEmail);
  const doc = await docRef.get();
  if(doc.exists) {
    const data = doc.data() as CartType;
    data.cart.push(productId)
    await docRef.update(data)
  } else {
    const data: CartType = {
      cart: [productId]
    }
    await docRef.set(data);
  }
}

export const removeFromCart = async (userEmail: string, productId: string) => {
  const db = getFirestore();
  const docRef = db.collection(CART_DB_COLLECTION).doc(userEmail);
  const doc = await docRef.get();
  if(doc.exists) {
    const data = doc.data() as CartType;
    const updatedList = {
      wishlist : data.cart.filter(i => i !== productId)
    }
    // data.wishlist.push(productId)
    await docRef.update(updatedList)
  } else {
    // const data: WishlistType = {
    //   wishlist: [productId]
    // }
    // await docRef.set(data);
  }
};



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
