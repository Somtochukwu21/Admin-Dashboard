import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonFade = () => {
  return (
    <Box sx={{ width: 600 }}>
      <Skeleton variant="rounded" width={600} height={280} animation="wave" />
    </Box>
  );
};
