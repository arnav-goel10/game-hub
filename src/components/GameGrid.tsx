import { Grid } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <Grid container spacing={2}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12} md={6} lg={4}>
            <GameCard key={game.id} game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
