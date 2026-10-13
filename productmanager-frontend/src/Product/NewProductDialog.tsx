import {
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem, Paper,
    Select,
    Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    TextField, Typography
} from "@mui/material";
import NewVariantDialog from "./NewVariantDialog.tsx";
import {useEffect, useState} from "react";
import type {Brand, Category, Variant} from "../types/types.tsx";
import {getAllBrands, getAllCategorys} from "../api/apiRequest.tsx";
import BrandDialog from "./BrandDialog.tsx";
import CategoryDialog from "./CategoryDialog.tsx";

type props ={
    open:boolean,
    onClose:()=>void,
}

function NewProductDialog({open,onClose}:props) {

    const [allBrands, setAllBrands] = useState<Brand[]>([]);
    const [allCategory, setAllCategory] = useState<Category[]>([]);

    const loadBrands = async () => {
        const response = await getAllBrands();
        setAllBrands(response.data);
    };

    const loadCategories = async () => {
        const response = await getAllCategorys();
        setAllCategory(response.data);
    };

    useEffect(() => {
        const loadInitialData = async () => {
            await Promise.all([
                loadBrands(),
                loadCategories()
            ]);
        };

        void loadInitialData();
    }, []);


    const [productName, setProductName] = useState("");
    const[brandId, setBrandId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [variant,setVariant]= useState<Variant[]>([]);

    const addProduct =() =>{
        console.log("Adding new product...")
        onClose()
    }

    const[variantDialog, setVariantDialog] = useState(false);

    const [brandDialog, setBrandDialog] = useState(false);

    const [categoryDialog, setCategoryDialog] = useState(false);


    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>Add product</DialogTitle>

            <DialogContent>
                <TextField
                    label="Product name"
                    fullWidth
                    margin="normal"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                <Stack direction="row" spacing={2} sx={{mt:2}}>
                    <FormControl sx={{ width: "75%" }} margin="normal">
                        <InputLabel id="brand-label">Brand</InputLabel>

                        <Select
                            labelId="brand-label"
                            value={brandId}
                            label="Brand"
                            onChange={(e) => setBrandId(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Select Brand</em>
                            </MenuItem>

                            {allBrands.map((brand: Brand) => (
                                <MenuItem
                                    key={brand.id}
                                    value={String(brand.id)}
                                >
                                    {brand.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button variant="outlined" sx={{width:"25%"}} onClick={()=>setBrandDialog(true)}>
                        Add new Brand
                    </Button>
                </Stack>

                <Stack direction="row" spacing={2} sx={{mt:2}}>
                    <FormControl sx={{width:"75%"}} margin="normal">
                        <InputLabel id="category-label">
                            Category
                        </InputLabel>

                        <Select
                            labelId="category-label"
                            value={categoryId}
                            label="Category"
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Select Category</em>
                            </MenuItem>

                            {allCategory.map((category: Category) => (
                                <MenuItem value={String(category.id)}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="outlined" sx={{width:"25%"}} onClick={()=>setCategoryDialog(true)}>
                        Add new Category
                    </Button>
                </Stack>




                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">
                        Variants
                    </Typography>

                    <TableContainer
                        component={Paper}
                        variant="outlined"
                        sx={{ mt: 1 }}
                    >
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Color</TableCell>
                                    <TableCell>SKU</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Stock</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {variant.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={6}
                                            align="center"
                                            sx={{ py: 3 }}
                                        >
                                            No variants added
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    variant.map((variant, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{variant.size}</TableCell>
                                            <TableCell>{variant.color}</TableCell>
                                            <TableCell>{variant.sku}</TableCell>
                                            <TableCell>
                                                {variant.price.toFixed(2)} €
                                            </TableCell>
                                            <TableCell>{variant.stock}</TableCell>

                                            <TableCell align="right">
                                                <Button
                                                    color="error"
                                                    onClick={() => {
                                                        setVariant(prev =>
                                                            prev.filter(
                                                                (_, i) => i !== index
                                                            )
                                                        );
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Button
                        variant="outlined"
                        sx={{ mt: 1.5 }}
                        onClick={() => {
                            setVariantDialog(true);
                        }}
                    >
                        Add variant
                    </Button>
                </Box>
                <NewVariantDialog open={variantDialog} onClose={()=>setVariantDialog(false)} />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    Close
                </Button>

                <Button variant="contained" onClick={addProduct}>
                    Create product
                </Button>
            </DialogActions>

            <BrandDialog open={brandDialog} onClose={()=>setBrandDialog(false)} loadBrand={loadBrands}/>
            <CategoryDialog open={categoryDialog} onClose={()=>setCategoryDialog(false)} loadCategory={loadCategories}/>

        </Dialog>
    );
}

export default NewProductDialog;