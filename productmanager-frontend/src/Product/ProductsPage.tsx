import {
    Box,
    Button,
    TextField,
} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllProducts} from "../api/apiRequest.tsx";
import type {Product} from "../types/types.tsx";
import ProductHeader from "./ProductHeader.tsx";
import ProductStats from "./ProductStats.tsx";
import ProductTable from "./ProductTable.tsx";
import NewProductDialog from "./NewProductDialog.tsx";

function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [openNewProduct, setOpenNewProduct] = useState(false);






    useEffect(() => {
        const loadProducts = async () => {
            try{
                const request = await getAllProducts();
                setProducts(request.data);
                console.log(request.data);
                console.log(request.status);
            }catch (err){
                console.log(err);
            }
        };

        loadProducts();
    }, []);

    return (
        <>
            <ProductHeader onAddProduct={()=>setOpenNewProduct(true)}/>
            <ProductStats/>
            <Box sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box sx={{display: "flex", gap: 1}}>
                    <TextField size="small" placeholder="Search by product name or SKU" sx={{width: 300}}/>
                    <Button variant="outlined">Filter</Button>
                </Box>
                <Box sx={{display: "flex", gap: 1}}>
                    <Button variant="contained" >All</Button>
                    <Button variant="outlined">Active</Button>
                    <Button variant="outlined">Drafts</Button>
                    <Button variant="outlined">Archived</Button>
                </Box>
            </Box>

            <Box sx={{m:2}}>
                <ProductTable products={products}/>
               <NewProductDialog open={openNewProduct} onClose={()=>setOpenNewProduct(false)}/>
            </Box>
        </>

    )
}

export default ProductsPage