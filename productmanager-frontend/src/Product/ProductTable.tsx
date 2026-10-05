import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import type {Product} from "../types/types.tsx";
type props={
    products: Product[]
}


function ProductTable({products}: props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox"><Checkbox/></TableCell>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Stock</TableCell>
                        <TableCell align="center" >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.productId}>
                            <TableCell padding="checkbox"><Checkbox/></TableCell>
                            <TableCell align="left" >{product.productId}</TableCell>
                            <TableCell align="right">{product.productName}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.stock}</TableCell>
                            <TableCell align="center" >{product.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;