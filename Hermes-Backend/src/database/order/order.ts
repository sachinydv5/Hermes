import { getFirestore } from 'firebase-admin/firestore';
import { ORDER_DB_COLLECTION } from '../constants';
import { ORDER, ORDER_STATUS } from '../../types/order/order.types';
import { randomUUID } from 'crypto';



type PARAM_ORDER = Omit<ORDER, "orderId" | "orderStatus" | "status">



export const findOrderByOrderId = async (orderId: string) => {
  const db = getFirestore();
  const snapshot = await db.collection(ORDER_DB_COLLECTION).doc(orderId).get();
  if (!snapshot.exists) return null;
  return snapshot.data() as ORDER;
}

export const createOrder = async (orderValue: PARAM_ORDER) => {
  const orderID = randomUUID();
  const order: ORDER = {
    products: orderValue.products,
    totalAmount: orderValue.totalAmount,
    orderStatus: 'CREATED',
    address: orderValue.address,
    lastUpdatedTime: new Date(),
    updateTrace: [],
    // invoice: undefined,
    userEmail: orderValue.userEmail,
    orderId: orderID
  }
  const db = getFirestore();
  const docRef = db.collection(ORDER_DB_COLLECTION).doc(orderID);
  await docRef.set(order);
  return order;
};

export const updateOrderStatus = async (orderId: string, orderStatus: ORDER_STATUS) => {
  const db = getFirestore();
  const snapshot = db.collection(ORDER_DB_COLLECTION).doc(orderId)
  await snapshot.update({ status: orderStatus })
}


