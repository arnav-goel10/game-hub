import { Typography } from "@mui/material";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "1.5rem" }}
      >
        <img src={logo} width={40} alt="Logo" style={{ marginRight: 16 }} />
        <Typography variant="body1" style={{ fontSize: "1.5rem" }}>
          NavBar
        </Typography>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "1.5rem" }}
      >
        <Typography variant="body1">check</Typography>
      </div>
    </div>
  );
};

export default NavBar;
