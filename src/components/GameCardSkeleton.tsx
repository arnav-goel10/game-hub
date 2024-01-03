import { Card, CardContent, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ width: "350px", borderRadius: 2, margin: 1.5 }}>
      <Skeleton variant="rounded" height={"200px"} />
      <CardContent>
        <Skeleton variant="text" height={"50px"} />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
