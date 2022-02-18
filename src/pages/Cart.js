import { useSelector } from "react-redux";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
// import { courses } from "../__mock__/__mock__";
import Box from "../components/Box";
import { SuccessButton } from "../components/Buttons";
import Grid from "../components/Grid";
import Container from "../components/Container";
// import { Typography } from "../components/Typography";

const Cart = () => {
  const { cart } = useSelector((state) => state.courseReducer);

  return (
    <>
      <DeskView>
        {cart.length ? (
          <>
            <CourseList cart courses={cart} />
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <SuccessButton fullWidth>Checkout</SuccessButton>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <Container>
              <Box sx={{ marginTop: "45px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}></Grid>
                  <Grid item xs={4}>
                    <img src="/images/empty-cart.png" />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </>
        )}
      </DeskView>
      <MobileView>
        <Box mt={5}>
          <CourseList mobile cart courses={cart} />
          <Box mt={5}>
            <SuccessButton fullWidth>Checkout</SuccessButton>
          </Box>
        </Box>
      </MobileView>
    </>
  );
};

export default Cart;
