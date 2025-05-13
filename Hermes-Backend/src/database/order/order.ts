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
    lastUpdatedTime: new Date().toISOString(),
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

export const updateOrderStatus = async (orderId: string, orderStatus: ORDER_STATUS, updatedBy: "DASHBOARD" | "SYSTEM") => {
  const oldOrder = await findOrderByOrderId(orderId);
  if (!oldOrder) return null;
  const db = getFirestore();
  const snapshot = db.collection(ORDER_DB_COLLECTION).doc(orderId)
  oldOrder.updateTrace.push({
    updatedBy: updatedBy, 
    time: new Date() 
  });
  // const trace = oldOrder.updateTrace.push[{ updatedBy: "DASHBOARD", time: Date.now() }]
  await snapshot.update({ orderStatus: orderStatus, updateTrace: oldOrder.updateTrace })
}

export const getAllOrders = async (): Promise<ORDER[]> => {
  const db = getFirestore();
  const snapshot = await db.collection(ORDER_DB_COLLECTION).get()
  return snapshot.docs.map(doc => doc.data() as ORDER);
}
