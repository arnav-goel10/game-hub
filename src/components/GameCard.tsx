import React from "react";
import { Game } from "../hooks/useGames";
import { Card } from "@mui/material";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return <Card></Card>;
};

export default GameCard;
