import "./App.css";
import { Button, Hidden, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>Navbar</Item>
        </Grid>
        <Hidden lgDown>
          <Grid lg={6}>
            <Item>Aside</Item>
          </Grid>
        </Hidden>
        <Grid xs>
          <Item>Content</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
