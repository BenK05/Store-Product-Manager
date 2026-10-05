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
import {useState} from "react";
import type {Variant} from "../types/types.tsx";

type props ={
    open:boolean,
    onClose:()=>void,
}

function NewProductDialog({open,onClose}:props) {
    const [productName, setProductName] = useState("");
    const[brandId, setBrandId] = useState<number|null>();
    const [categoryId, setCategoryId] = useState<number|null>();
    const [variant,setVariant]= useState<Variant[]>([]);
    const[variantDialog, setVariantDialog] = useState(false);
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
                    <FormControl sx={{width:"75%"}} margin="normal">
                        <InputLabel id="brand-label">
                            Brand
                        </InputLabel>

                        <Select
                            labelId="brand-label"
                            value={brandId}
                            label="Brand"
                            onChange={(e) =>
                                setBrandId(Number(e.target.value))
                            }
                        >
                            <MenuItem value={10}>Nike</MenuItem>
                            <MenuItem value={20}>Adidas</MenuItem>
                            <MenuItem value={30}>Puma</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="outlined" sx={{width:"25%"}}>
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
                            onChange={(e) =>
                                setCategoryId(Number(e.target.value))
                            }
                        >
                            <MenuItem value={10}>Shirts</MenuItem>
                            <MenuItem value={20}>Shoes</MenuItem>
                            <MenuItem value={30}>Pants</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" sx={{width:"25%"}}>
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

                <Button variant="contained">
                    Create product
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewProductDialog;