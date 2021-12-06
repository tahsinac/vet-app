import React from "react";
import PhotoCard from "./PhotoCard";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Box, Button} from "@mui/material";
import UploadImageButton from "./UploadImageButton";

export default function PhotoGrid(){
    return (
        <Container sx={{p: 2}}>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', p:1, m: 1}}>
                <UploadImageButton/>
            </Box>
            <Grid container spacing = {4}>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <PhotoCard/>
                </Grid>
                <Grid item xs = {12}sm = {6} md = {4}>
                    <PhotoCard/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <PhotoCard/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <PhotoCard/>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {4}>
                    <PhotoCard/>
                </Grid>
            </Grid>
        </Container> 
    );
}