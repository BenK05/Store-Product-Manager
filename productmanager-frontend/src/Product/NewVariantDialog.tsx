import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useState} from "react";
type props={
    open: boolean,
    onClose: () => void,
}

function NewVariantDialog({open, onClose}: props){
    const [sizeId, setSizeId] = useState<number|null>(null);
    const [color, setColor] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [barcode, setBarcode] = useState<string>();
    const [stock, setStock] = useState<number>();

    return (
        <Dialog open={open} onClose={onClose} fullWidth
                maxWidth="md"
        >
            <DialogTitle>Add Variants</DialogTitle>
            <DialogContent>
                <TextField label="skuCode" fullWidth margin="normal"/>
                <FormControl sx={{width: "75%"}} margin="normal">
                    <InputLabel id="category-label">
                        Size
                    </InputLabel>

                    <Select
                        labelId="size"
                        value={sizeId}
                        label="Size"
                        onChange={(e) =>
                            setSizeId(Number(e.target.value))
                        }
                    >
                        <MenuItem value={10}>xs</MenuItem>
                        <MenuItem value={20}>s</MenuItem>
                        <MenuItem value={30}>m</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="color-label"  fullWidth label="Color" sx={{mt:2}}
                           value={color}
                           onChange={(e) =>setColor(e.target.value)} />

                <TextField id="price-label" fullWidth label="Price" sx={{mt:2}}
                           value={price}
                           onChange={(e) =>setPrice(e.target.value)} />

                <TextField id="barcode-label" fullWidth label="Barcode" sx={{mt:2}}
                           value={barcode}
                           onChange={(e) =>setBarcode(e.target.value)} />

                <TextField id="stock-label"  fullWidth label="Stock" sx={{mt:2}}
                           value={stock}
                           type="number"
                           onChange={(e) => setStock(Number(e.target.value))}/>

                <Button onClick={onClose} sx={{mt:2}}>Close</Button>
            </DialogContent>
        </Dialog>
    );
}

export default NewVariantDialog;