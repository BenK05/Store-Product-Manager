import {Box} from "@mui/material";
import Sidebar from "./Sidebar/Sidebar.tsx";
import ProductsPage from "./Product/ProductsPage.tsx";


function App() {


    return (
        <Box sx={{
            display: "flex",
            minHeight: "100vh",
        }}>
            <Sidebar/>

            <Box sx={{
                bgcolor: "grey.50",
                flexGrow: 1,
            }}>
                <ProductsPage/>
            </Box>
        </Box>
    )
}

export default App
