import Box from "../components/Box";
import { Section } from "../components/Section";
import Container from "../components/Container";
import Grid from "../components/Grid";
import { Card, CardContent, CardActions } from "@mui/material";
import { Typography } from "../components/Typography";
import { PrimaryTransparentButton } from "../components/Buttons";
import MobileView from "../components/MobileView";
const MobileHomePage = () => {
  return (
    <MobileView>
      <Box>
        <Section
          bgColor="var(--orange)"
          mt="20px"
          style={{ borderRadius: "20px" }}
        >
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
                    <Typography variant="h6" mb={5}>
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
                      //   onClick={() => navigate("/courses")}
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
                    background: "url(../images/img1.jpeg) no-repeat ",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Container maxWidth="lg" sx={{ padding: "10vh 0" }}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Box>
                <Grid container justifyContent="center">
                  <Grid item md={2} xs={2}></Grid>
                  <Grid item md={10} xs={10}>
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
    </MobileView>
  );
};

export default MobileHomePage;
