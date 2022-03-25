import { Container, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Typography } from "../components/Typography";
import { PrimaryTransparentButton } from "../components/Buttons";
import { Section } from "../components/Section";
import DeskView from "../components/DeskView";
import {
  ABSOLUTE,
  COURSES_PATH,
  RELATIVE,
  LG,
  NONE,
  H6,
  BODY2,
  ZERO,
  OUTLINED,
  LARGE,
  HOME_PAGE_IMG1,
  HOME_PAGE_IMG2,
  CENTER,
  CENTER_RIGHT,
  COVER,
  _100_PERC,
  ORANGE,
  WHITE,
  VH10,
} from "../utils/Constants";

const StyleNoPadding = { padding: ZERO };

const Home = function () {
  const navigate = useNavigate();
  return (
    <>
      <DeskView noContainer>
        <Box>
          <Section bgColor={ORANGE} position={RELATIVE}>
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
                      <Typography variant={H6} mb={10}>
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
                      width: "50%",
                      height: _100_PERC,
                      background: `url(${HOME_PAGE_IMG1}) no-repeat`,
                      backgroundPosition: CENTER_RIGHT,
                      position: ABSOLUTE,
                      top: 0,
                      right: 0,
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Section>
          <Container maxWidth={LG} sx={{ paddingY: VH10 }}>
            <Grid container spacing={2} alignItems={CENTER}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: _100_PERC,
                    paddingY: "30%",
                    background: `url(${HOME_PAGE_IMG2}) no-repeat`,
                    backgroundSize: COVER,
                    backgroundPosition: CENTER,
                  }}
                ></Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Grid container justifyContent={CENTER}>
                    <Grid item md={6}>
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
      </DeskView>
    </>
  );
};

export default Home;
