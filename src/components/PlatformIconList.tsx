import React from "react";
import { Platform } from "../hooks/useGames";
import { Typography } from "@mui/material";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Typography>{platform.name}</Typography>
      ))}
    </>
  );
};

export default PlatformIconList;
