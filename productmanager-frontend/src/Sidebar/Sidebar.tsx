import {Box, List, ListItemButton} from "@mui/material";

const style = {
    p: 2,
    borderRadius: 2,
    backgroundColor: "grey.200",
    "&.Mui-selected": {
        backgroundColor: "primary.main",
        color: "white",
    }
}

function Sidebar() {
    return (
        <Box sx={{
            width: "240px",
            flexShrink: 0,
            minHeight: "100vh",
            bgcolor: "grey.100",
            display: "flex",
            flexDirection: "column",
        }}>
            <List sx={{
                pt:5,
                pl: 2,
                pr: 2,

            }}>
                <ListItemButton
                    sx={style}
                    selected>Products</ListItemButton>
            </List>
            <ListItemButton sx={{...style,mr:2,mb:5,ml:2,flexGrow:0, mt: "auto"}}>Settings</ListItemButton>
        </Box>
    )
}
export default Sidebar