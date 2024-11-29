import { randomUUID } from "crypto";
import { ProductDoSchema, ProductRequestSchema } from "../../types/product/product";
import { getFirestore} from 'firebase-admin/firestore';
import moment from "moment";


export const addProductInDB = async (product: ProductRequestSchema)=>{
  const db = getFirestore()
  const productDB: ProductDoSchema  = {
    id:randomUUID(),
    name:product.name,
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
    qty : product.qty,
    createTs: moment().format()
  }
  await db.collection("product").doc(productDB.id).set(productDB);
}

export const getTotalRecords = async()=>{
  const db = getFirestore();
  let query = await db.collection("product").count().get();
  return query.data().count;
}

export const getProductsFromDB = async (lastDoc: string | undefined, limit: number): Promise<{products:ProductDoSchema[],lastRef?: string}>  => {
  try {
    const db = getFirestore();
    let productSnapshot;
    let query = db.collection("product").orderBy("id");
    if(lastDoc!=null){
      productSnapshot = await query.startAfter(lastDoc).limit(limit).get();
    } else {
      productSnapshot = await query.limit(limit).get();
    }

    if (productSnapshot.empty) {
      console.log("No products found");
      throw new Error("No Product found");
    }

    let product: ProductDoSchema[]=[];
    if (!productSnapshot.empty) {
      productSnapshot.forEach( (doc) => {
        product.push(doc.data() as ProductDoSchema);
      })
    }
    let lastDocRef = productSnapshot.docs[productSnapshot.docs.length-1];
    
    return {products:product, lastRef:lastDocRef.data().id};
  } catch (error) {
    console.error("Error getting products: ", error);
    throw new Error();
  }
}