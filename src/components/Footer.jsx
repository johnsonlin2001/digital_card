import React from "react";
import { IconButton } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "../App.css"

export default function Footer(){
    return(
        <div className="footer">
            <IconButton aria-label="delete" style={{
                backgroundColor:"#918E9B",
                color:"#161619",
                borderRadius: "5px"
            }}>
                <Twitter/>
            </IconButton>
            <IconButton aria-label="delete" style={{
                backgroundColor:"#918E9B",
                color:"#161619",
                borderRadius: "5px"
            }}>
                <Facebook/>
            </IconButton>
            <IconButton aria-label="delete" style={{
                backgroundColor:"#918E9B",
                color:"#161619",
                borderRadius: "5px"
            }}>
                <Instagram/>
            </IconButton>
            <IconButton aria-label="delete" style={{
                backgroundColor:"#918E9B",
                color:"#161619",
                borderRadius: "5px"
            }} onClick={(e) => {
                e.preventDefault();
                window.location.href='https://github.com/johnsonlin2001';
                }}>
                <GitHub/>
            </IconButton>
        </div>
    )
    
}