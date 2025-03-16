export type OrderStatus = 'INITIATED' | 'ORDER_PLACED' | 'FAILURE' | 'IN_TRANSIT' | 'REACHED' | 'REFUNDED' | 'ABORTED' | 'CREATED' | 'PAYMENT_SUCCESS' | 'PAYMENT_FAILURE'
export type PaymentStatus = "PAYMENT_SUCCESS" | "PAYMENT_FAILED" | "PAYMENT_PENDING"

export interface Product {
  id: string
  name: string
  category: string
  collectionId: string
  description: string
  discount: number
  duration: {
    unit: string
    value: number
  }
  pickupAddress: {
    city: string
    country: string
    pincode: string
    addressLine1: string
    addressLine2: string
  }
  userId: string
  qty: number
  createTs: string
  price: string
}

export interface Address {
  city: string
  country: string
  pincode: string
  addressLine1?: string
  addressLine2?: string
}

export interface TimeStamp {
  _seconds: number
  _nanoseconds: number
}

export interface Order {
  orderId: string
  userEmail: string
  products: Product[]
  totalAmount: number
  orderStatus: OrderStatus
  status: PaymentStatus
  address: Address
  lastUpdatedTime: TimeStamp
  updateTrace: any[]
}

// Legacy type for backward compatibility with UI
export interface LegacyOrder {
  id: string
  customerName: string
  date: string
  status: string
  items?: {
    name: string
    quantity: number
    price: number
  }[]
  total?: number
}

