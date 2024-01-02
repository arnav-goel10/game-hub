import { Box } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#04bd35",
        color: "white",
        borderRadius: 0.5,
        fontWeight: "bold",
        display: "inline-block",
        paddingX: 0.7,
        paddingY: 0.5,
      }}
    >
      {score}
    </Box>
  );
};

export default CriticScore;
