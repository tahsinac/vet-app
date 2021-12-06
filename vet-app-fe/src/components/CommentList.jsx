import React from "react";
import Comment from "./Comment";
import {Box, Button} from "@mui/material";

export default function CommentList(){
    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', p:1, m: 1}}>
                <Button variant="contained" color="secondary" sx={{ m: 1 }}>New</Button>
            </Box>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}