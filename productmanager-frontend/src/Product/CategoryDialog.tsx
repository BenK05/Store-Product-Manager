import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import {addCategory} from "../api/apiRequest.tsx";

type props={
    open: boolean;
    onClose: () => void;
    loadCategory:() => void;
}

function CategoryDialog({open, onClose,loadCategory}: props) {
    const[name, setName] = useState("");
    const add = async ()=>{
        const response = await addCategory(name);
        if(response.status==201){
            loadCategory();
            onClose();
        }
        else{
            alert(`Error: ${response.status}`);
        }
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md">
            <DialogTitle>New Category</DialogTitle>
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
                    Add Category
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CategoryDialog;