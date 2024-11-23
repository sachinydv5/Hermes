import { randomUUID } from "crypto";
import { ProductDoSchema, ProductRequestSchema } from "../../types/product/product";
import { getFirestore } from 'firebase-admin/firestore';


export const addProductInDB = async (product: ProductRequestSchema)=>{
  const db = getFirestore()
  const productDB: ProductDoSchema  = {
    id:randomUUID(),
    category : product.category,
    collectionId : product.collectionId,
    description : product.description,
    discount : product.discount,
    duration : {
        unit: product.duration.unit,
        value : product.duration.value
    },
    pickupAddress : {
       city : product.pickupAddress.city,
       country : product.pickupAddress.country,
       pincode : product.pickupAddress.pincode,
       addressLine1 : product.pickupAddress.addressLine1,
       addressLine2 : product.pickupAddress.addressLine2
    },
    price : product.price,
    userId : product.userId,
    qty : product.qty
  }
  await db.collection("product").doc(productDB.id).set(productDB);
}
