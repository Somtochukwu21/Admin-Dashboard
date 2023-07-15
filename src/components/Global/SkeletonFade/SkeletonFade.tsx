import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
type PropType = { width: number | string; height: number };
export const SkeletonFade = ({ width, height }: PropType) => {
  return (
    <Box sx={{ width: 600 }}>
      <Skeleton variant="rounded" width={width} height={height} animation="wave" />
    </Box>
  );
};
