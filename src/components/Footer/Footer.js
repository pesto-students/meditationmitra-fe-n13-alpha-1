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
import {
  BODY1,
  CENTER,
  COVER,
  H6,
  LG,
  LOGO,
  ORANGE,
  RELATIVE,
  ROW,
  WHITE,
  _100_PERC,
} from "../../utils/Constants";

const Footer = () => (
  <DeskView noContainer>
    <FooterSection bgColor={ORANGE} color={WHITE}>
      <Container maxWidth={LG}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant={BODY1}>
              We earned a reputation of being good at what we do.
            </Typography>
            <Typography variant={BODY1}>
              Let us take your Mental Health on whole positive level !!!!
            </Typography>
            <Box
              sx={{
                width: "20%",
                height: "150px",
                marginTop: "5vh",
                background: `url(${LOGO}) no-repeat`,
                backgroundSize: COVER,
                backgroundPosition: CENTER,
              }}
            />

            <Stack sx={{ marginBottom: "5vh" }} direction={ROW} spacing={1}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </Stack>
            <Typography variant={BODY1}>
              Copyright © 2020 . Your company name All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={H6} mb="5vh">
              RECEIVE EMAIL UPDATES
            </Typography>
            <Box
              component="form"
              sx={{
                width: _100_PERC,
                position: RELATIVE,
                marginBottom: "5vh",
              }}
            >
              <Input
                fullWidth
                sx={{
                  borderColor: "transparent",
                  backgroundColor: WHITE,
                  height: "61px",
                }}
              />
              <SecondaryButton>JOIN</SecondaryButton>
            </Box>

            <hr style={{ marginBottom: "5vh" }} />
            <Typography variant={H6}>Contact Us:</Typography>
            <Typography variant={BODY1}>
              Email: support@meditationmitra.com
            </Typography>
            <Typography variant={BODY1}>Phone: 01647470457</Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  </DeskView>
);

export default Footer;
