import {Paper, Typography} from "@mui/material";

type props={
    title: string,
    value: string,
    percentage: string,
}

function StateCard({title, value, percentage}: props){
    return (
        <Paper variant="outlined"
               sx={{
                   p: 2,
                   borderRadius: 2,
                   flex:1
               }}>
            <Typography>{title}</Typography>
            <Typography>{value}</Typography>
            <Typography>{percentage}</Typography>
        </Paper>
    )
}

export default StateCard;