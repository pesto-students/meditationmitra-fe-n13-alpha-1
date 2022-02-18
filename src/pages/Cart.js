import { useSelector } from "react-redux";
import PropTypes from "prop-types";
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
  const EmptyCart = ({ mobile }) => (
    <>
      <Container>
        <Box sx={{ marginTop: "45px" }}>
          {mobile ? (
            <img src="/images/empty-cart.png" style={{ width: "100%" }} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <img src="/images/empty-cart.png" />
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );

  EmptyCart.propTypes = {
    mobile: PropTypes.bool,
  };

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
          <EmptyCart />
        )}
      </DeskView>
      <MobileView>
        <Box mt={5}>
          {cart.length ? (
            <>
              <CourseList mobile cart courses={cart} />
              <Box mt={5}>
                <SuccessButton fullWidth>Checkout</SuccessButton>
              </Box>
            </>
          ) : (
            <EmptyCart mobile />
          )}
        </Box>
      </MobileView>
    </>
  );
};

export default Cart;
