import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions } from "@mui/material";
import Box from "../components/Box";
import { Section } from "../components/Section";
import Container from "../components/Container";
import Grid from "../components/Grid";
import { Typography } from "../components/Typography";
import { PrimaryTransparentButton } from "../components/Buttons";
import MobileView from "../components/MobileView";
import {
  BODY2,
  CENTER,
  CONTAIN,
  COURSES_PATH,
  H6,
  HOME_PAGE_IMG1,
  LARGE,
  LG,
  NONE,
  ORANGE,
  OUTLINED,
  RELATIVE,
  VH10,
  WHITE,
  ZERO,
  _100_PERC,
} from "../utils/Constants";

const StyleNoPadding = { padding: ZERO };

const MobileHomePage = () => {
  const navigate = useNavigate();
  return (
    <MobileView>
      <Box>
        <Section bgColor={ORANGE} mt="20px" style={{ borderRadius: "20px" }}>
          <Container maxWidth={LG}>
            <Grid container spacing={2}>
              <Grid item xs={7} md={6} lg={6} style={StyleNoPadding}>
                <Card
                  sx={{
                    paddingY: VH10,
                    background: NONE,
                    boxShadow: NONE,
                    color: WHITE,
                  }}
                >
                  <CardContent sx={StyleNoPadding}>
                    <Typography variant={H6} mb={5}>
                      One to One Sessions with World Renown Coaches
                    </Typography>
                    <Typography variant={BODY2}>Easy as 1-2-3.</Typography>
                    <ol>
                      <li>Enroll Course</li>
                      <li>Book Convinient slot</li>
                      <li>
                        Get Directed and live Sessions with your Instructor
                      </li>
                    </ol>
                  </CardContent>
                  <CardActions>
                    <PrimaryTransparentButton
                      variant={OUTLINED}
                      size={LARGE}
                      onClick={() => navigate(COURSES_PATH)}
                    >
                      Learn More
                    </PrimaryTransparentButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={5} md={6} lg={6}>
                <Box
                  sx={{
                    width: _100_PERC,
                    height: _100_PERC,
                    background: `url(${HOME_PAGE_IMG1}) no-repeat`,
                    backgroundSize: CONTAIN,
                    backgroundPosition: CENTER,
                    position: RELATIVE,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Container maxWidth={LG} sx={{ paddingY: VH10 }}>
          <Grid container alignItems={CENTER}>
            <Grid item xs={12}>
              <Box>
                <Grid container justifyContent={CENTER}>
                  <Grid item md={2} xs={2}></Grid>
                  <Grid item md={10} xs={10}>
                    <Typography variant={H6} mb={5}>
                      One hour with a Master today is equal to Thousands
                      Tommorrow
                    </Typography>
                    <ul>
                      <li>Anxiety free Life</li>
                      <li>Stress free Life</li>
                      <li>Increase Concentration</li>
                    </ul>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MobileView>
  );
};

export default MobileHomePage;
