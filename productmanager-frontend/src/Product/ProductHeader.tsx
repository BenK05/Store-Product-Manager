import {Box, Button, Typography} from "@mui/material";
type props={
    onAddProduct:()=>void,
}
function ProductHeader({onAddProduct}:props){
    return(
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
                <Button variant="contained" onClick={onAddProduct}>
                    Add product
                </Button>
            </Box>
        </Box>
    );
}
export default ProductHeader;