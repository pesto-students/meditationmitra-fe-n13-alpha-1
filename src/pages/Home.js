import { Container, Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Typography } from "../components/Typography";
import { PrimaryTransparentButton } from "../components/Buttons";
import { Section } from "../components/Section";
import DeskView from "../components/DeskView";

const Home = function () {
  const navigate = useNavigate();
  return (
    <DeskView noContainer>
      <Box>
        <Section bgColor="var(--orange)" position="relative">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={7} md={6} lg={6} style={{ padding: "0" }}>
                <Card
                  sx={{
                    padding: "10vh 0",
                    background: "none",
                    boxShadow: "none",
                    color: "var(--white)",
                  }}
                >
                  <CardContent sx={{ padding: "0" }}>
                    <Typography variant="h6" mb={10}>
                      One to One Sessions with World Renown Coaches
                    </Typography>

                    <Typography variant="body2">Easy as 1-2-3.</Typography>
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
                      variant="outlined"
                      size="large"
                      onClick={() => navigate("/courses")}
                    >
                      Learn More
                    </PrimaryTransparentButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={5} md={6} lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "url(../images/img1.jpeg) no-repeat",
                    backgroundPosition: "center right",
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Container maxWidth="lg" sx={{ padding: "10vh 0" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Box
                sx={{
                  width: "100%",
                  padding: "30% 0",
                  background: "url(../images/img2.jpeg) no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Grid container justifyContent="center">
                  <Grid item md={6}>
                    <Typography variant="h6" mb={5}>
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
  );
};

export default Home;
