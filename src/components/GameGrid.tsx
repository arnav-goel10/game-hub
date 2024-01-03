import { Grid } from "@mui/material";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <div>{error}</div>}
      <Grid container spacing={1.5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <Grid item key={game.id} xs={12} md={6} lg={4} xl={2.4}>
            <GameCard key={game.id} game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
