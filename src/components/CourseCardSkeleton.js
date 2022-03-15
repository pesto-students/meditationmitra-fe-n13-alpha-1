import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "./Typography";
import Box from "./Box";
import {
  BODY1,
  BODY2,
  COLUMN,
  FLEX,
  PX10,
  RECTANGULAR,
  ROW,
} from "../utils/Constants";

export const CourseCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant={RECTANGULAR} width={300} height={300} />
      <CardContent>
        <Typography variant={BODY1} mb={2}>
          <Skeleton />
        </Typography>
        <Typography variant={BODY1} mb={2}>
          <Skeleton width="60%" />
        </Typography>
        <Typography variant={BODY2}>
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
        display: FLEX,
        flexDirection: ROW,
        width: "95%",
        margin: "10px auto",
        borderRadius: PX10,
      }}
    >
      <Box sx={{ display: FLEX, flexDirection: COLUMN }}>
        <CardContent>
          <Typography variant={BODY1} mb={1} mt={2} sx={{ width: "230px" }}>
            <Skeleton />
          </Typography>
          <Typography variant={BODY1} mb={1}>
            <Skeleton width="60%" />
          </Typography>
          <Typography variant={BODY2} mb={1}>
            <Skeleton width="30%" />
          </Typography>
          <Typography variant={BODY2}>
            <Skeleton />
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: FLEX, flexDirection: COLUMN }}>
        <Skeleton width={165} height={170} sx={{}} />
      </Box>
    </Card>
  </>
);
