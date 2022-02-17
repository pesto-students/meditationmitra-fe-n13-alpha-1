import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Input from "@mui/material/Input";
import { SecondaryButton } from "../Buttons";
import { FooterSection } from "../Section";
import DeskView from "../DeskView";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";
import { Typography } from "../Typography";
import Stack from "../Stack";

const Footer = () => (
  <DeskView noContainer>
    <FooterSection bgColor="var(--orange)" color="var(--white)">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">
              We earned a reputation of being good at what we do.
            </Typography>
            <Typography variant="body1">
              Let us take your Mental Health on whole positive level !!!!
            </Typography>
            <Box
              sx={{
                width: "20%",
                height: "150px",
                marginTop: "5vh",
                background: "url(../images/logo-img.png) no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Stack sx={{ marginBottom: "5vh" }} direction="row" spacing={1}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </Stack>
            <Typography variant="body1">
              Copyright © 2020 . Your company name All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" mb="5vh">
              RECEIVE EMAIL UPDATES
            </Typography>
            <Box
              component="form"
              sx={{
                width: "100%",
                position: "relative",
                marginBottom: "5vh",
              }}
            >
              <Input
                fullWidth
                sx={{
                  borderColor: "transparent",
                  backgroundColor: "#FFF",
                  height: "61px",
                }}
              />
              <SecondaryButton>JOIN</SecondaryButton>
            </Box>

            <hr style={{ marginBottom: "5vh" }} />
            <Typography variant="h6">Contact Us:</Typography>
            <Typography variant="body1">
              Email: support@meditationmitra.com
            </Typography>
            <Typography variant="body1">Phone: 01647470457</Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  </DeskView>
);

export default Footer;
