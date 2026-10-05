import {apiInstance} from "./axios.tsx";

function getAllProducts(){
    return apiInstance.get("/product/all");
}

export {getAllProducts};