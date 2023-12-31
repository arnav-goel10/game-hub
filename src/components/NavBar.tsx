import { Typography } from "@mui/material";
import logo from "../assets/logo.png";
import React from "react";

const NavBar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} width={40} alt="Logo" style={{ marginRight: 16 }} />
      <Typography variant="body1" style={{ fontSize: "1.5rem" }}>
        NavBar
      </Typography>
    </div>
  );
};

export default NavBar;
