
export type Product = {
    name: string;
    description: string;
    qty: number;
    duration: {
        value: number;
        unit: string;
    };
    discount: number;
    pickupAddress: {
        city: string;
        country: string;
        pincode: string;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
    };
    price: number;
    category: string;
    userId: string;
    collectionId: string;
    img?: string[] | undefined;
}





