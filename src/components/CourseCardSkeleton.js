import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "./Typography";
import Box from "./Box";

export const CourseCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width={300} height={300} />
      <CardContent>
        <Typography variant="body1" mb={2}>
          <Skeleton />
        </Typography>
        <Typography variant="body1" mb={2}>
          <Skeleton width="60%" />
        </Typography>
        <Typography variant="body2">
          <Skeleton width="30%" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export const MobileCourseCardSkeleton = () => (
  <>
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        margin: "10px auto",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="body1" mb={1} mt={2} sx={{ width: "230px" }}>
            <Skeleton />
          </Typography>
          <Typography variant="body1" mb={1}>
            <Skeleton width="60%" />
          </Typography>
          <Typography variant="body2" mb={1}>
            <Skeleton width="30%" />
          </Typography>
          <Typography variant="body2">
            <Skeleton />
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Skeleton width={165} height={170} sx={{}} />
      </Box>
    </Card>
  </>
);
