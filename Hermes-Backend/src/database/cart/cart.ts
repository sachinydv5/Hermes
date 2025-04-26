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

  if (doc.exists) {
    const data = doc.data() as CartType;
    let updated = false;

    console.log(data)
    console.log(data?.cart)
    if (data?.cart == undefined || data?.cart == null || data?.cart.length == 0) {
      data.cart = [{ productId, quantity: 1 }]
      await docRef.update({ cart: [{ productId, quantity: 1 }] });
    } else {
    const updatedCart = data.cart.map(item => {
      if (item.productId === productId) {
        updated = true;
        return { ...item, quantity: item.quantity + 1 }; // increment quantity
      }
      return item;
    });

    if (!updated) {
      updatedCart.push({ productId, quantity: 1 }); // add new product
    }

    await docRef.update({ cart: updatedCart });
  }
  } else {
    const data: CartType = {
      cart: [{ productId, quantity: 1 }]
    };
    await docRef.set(data);
  }
};

export const removeFromCart = async (userEmail: string, productId: string) => {
  const db = getFirestore();
  const docRef = db.collection(CART_DB_COLLECTION).doc(userEmail);
  const doc = await docRef.get();

  if (doc.exists) {
    const data = doc.data() as CartType;

    const updatedCart = data.cart
      .map(item => {
        if (item.productId === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }; // decrement quantity
          }
          return null; // mark for removal
        }
        return item;
      })
      .filter(item => item !== null); // remove items with quantity 0

    await docRef.update({ cart: updatedCart });
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
