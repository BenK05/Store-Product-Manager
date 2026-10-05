import StateCard from "./StateCard.tsx";
import {Box} from "@mui/material";

function ProductStats(){
    return (
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
    )
}
export default ProductStats;