import {
    Box,
    Button, Checkbox,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import StateCard from "./StateCard.tsx";

function ProductsPage() {
    return (
        <>
            <Box
                sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Box>
                    <Typography variant="h4">Products</Typography>
                    <Typography color="text.secondary">Manage inventory, pricing and availability</Typography>
                </Box>
                <Box sx={{display: "flex", gap: 2}}>
                    <Button variant="outlined">
                        Export
                    </Button>
                    <Button variant="contained">
                        Add product
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                p: 2,
                display: "flex",
                gap: 2
            }}>
                <StateCard title="Total Products" value="1,432" percentage="+3%"/>
                <StateCard title="Total Revenue" value="$84,320" percentage="+12.5%"/>
                <StateCard title="Total Orders" value="142" percentage="-1.4%"/>
                <StateCard title="Customers" value="3,240" percentage="+2.1%"/>
            </Box>
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
                        <TableBody></TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    )
}

export default ProductsPage