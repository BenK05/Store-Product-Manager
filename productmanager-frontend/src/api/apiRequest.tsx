import {apiInstance} from "./axios.tsx";

function getAllProducts(){
    return apiInstance.get("/product/all");
}

function getAllBrands(){
    return apiInstance.get("/brand/all");
}

function addBrand(brand:string){
    return apiInstance.post("/brand", null, {
        params: {
            name: brand
        }
    });
}

function getAllCategorys(){
    return apiInstance.get("/category/all");
}

function addCategory(category:string){
    return apiInstance.post("/category", null, {
        params: {
            name: category
        }
    })
}

export {getAllProducts,getAllBrands,addBrand,getAllCategorys,addCategory};