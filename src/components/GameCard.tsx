import { Game } from "../hooks/useGames";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ borderRadius: 2, overflow: "hidden", margin: 0 }}>
      <CardMedia
        sx={{
          aspectRatio: "16/9",
          "& img": {
            objectFit: "contain",
          },
        }}
        image={game.background_image}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        {game.parent_platforms.map(({ platform }) => (
          <Typography>{platform.name}</Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
