import React from "react";
import Comment from "./Comment";
import NewCommentButton from "./NewCommentButton";
import {Box, Button} from "@mui/material";

export default function CommentList(){
    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', p:1, m: 1}}>
                <NewCommentButton/>
            </Box>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    );
}