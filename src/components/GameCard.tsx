import { Game } from "../hooks/useGames";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Box } from "@mui/material";

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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            marginBottom: 2,
            fontSize: "1.75rem",
            fontWeight: "bold",
          }}
        >
          {game.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1rem",
          }}
        >
          <Box>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </Box>
          <CriticScore score={game.metacritic} />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
