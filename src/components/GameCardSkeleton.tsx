import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ width: "300px", borderRadius: 2, margin: 2 }}>
      <Skeleton variant="rounded" height={"200px"} />
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
