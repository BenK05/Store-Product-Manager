

export type Product = {
    productId: number;
    productName: string;
    price: number;
    stock: number;
    state:string;
}

export type Variant={
    sku:string;
    size:string;
    color:string;
    price:number;
    barcode:string;
    stock:number;

}

export type NewProduct={
    productName:string,
    brand:string,
    category:string,
    variants:Variant[],
}

