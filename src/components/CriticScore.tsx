import { Badge } from "@mui/material";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      sx={{
        backgroundColor: "green",
        color: "white",
        padding: "0.25rem 0.5rem",
        borderRadius: 1,
        textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
        fontWeight: "bold",
      }}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
