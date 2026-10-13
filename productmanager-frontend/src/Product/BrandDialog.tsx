import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {addBrand} from "../api/apiRequest.tsx";

type props ={
    open:boolean,
    onClose:()=>void,
    loadBrand:()=>void,
}
function BrandDialog({open, onClose,loadBrand}:props) {

    const [name, setName] = useState("");

    const add =async () =>{
        const response = await addBrand(name);
        if(response.status==201){
            loadBrand();
            onClose();
        }
        else{
            alert(`Error: ${response.status}`);
        }
    }
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle>New Brand</DialogTitle>
            <DialogContent>
                <TextField label="Name" fullWidth margin="normal"
                           value={name}
                           onChange={(e) => setName(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>
                    Close
                </Button>

                <Button variant="contained" onClick={add}>
                    Add Brand
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BrandDialog;