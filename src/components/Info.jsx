import React from "react";
import "../App.css";
import { GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

export default function Info(){
    return(
        <div className="Info">
            <img src="../public/vite.svg" width={60}></img>
            <h1>John Lin</h1>
            <h2>Computer Engineer</h2>
            <div className="git"><GitHub/><h3>github.com/johnsonlin2001</h3></div>
            <div className="buttons">
                <Button style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "0px 20px",
                    border: "0px",
                    height: "34px",
                    width: "115px"
                }}  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://google.com';
                    }}>
                    <Email/>
                    <p>Email</p>
                </Button>
                <Button style={{
                    backgroundColor: "#5093E2",
                    color: "white",
                    padding: "0px 20px",
                    border: "0px",
                    height: "34px",
                    width: "115px"
                }}  onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.linkedin.com/in/john-lin-475007209/';
                    }}> 
                    <LinkedIn/>
                    Linkedin
                </Button>
            </div>
        </div>
    )
    
}



