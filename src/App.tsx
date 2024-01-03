import "./App.css";
import { Hidden, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#000" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: "center",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    paddingLeft: theme.spacing(3),
  }));

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <NavBar />
          </Item>
        </Grid>
        <Hidden lgDown>
          <Grid lg={2} marginLeft={"1.5rem"}>
            <Item>Aside</Item>
          </Grid>
        </Hidden>
        <Grid xs>
          <Item>
            <GameGrid />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
