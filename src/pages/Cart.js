import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import Box from "../components/Box";
import { SuccessButton } from "../components/Buttons";
import Grid from "../components/Grid";
import Container from "../components/Container";
import { Typography } from "../components/Typography";
import Stack from "../components/Stack";
import { ProceedToPay } from "../api/services/paymentService";
import { courseActions } from "../api/reducers/courseReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.courseReducer);
  const onCheckout = () => {
    const payout = async () => {
      const data = {
        totalAmount: calcTotalAmount(),
        courseList: cart.map((item) => item.name),
      };
      const response = await ProceedToPay(data);
      console.log(response);
      const respData = response.data;
      if (respData.status === 200) dispatch(courseActions.clearCart());
    };
    payout();
  };

  const calcTotalAmount = () => {
    return cart.map((item) => item.price).reduce((init, a) => init + a, 0);
  };

  const removeItem = () => {
    dispatch(courseActions.removeFromCart());
  };
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
            <CourseList cart remove={removeItem} courses={cart} />
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <Stack direction="column">
                    <Typography sx={{ marginBottom: "50px" }}>
                      Total Amount : {calcTotalAmount()}
                    </Typography>
                    <SuccessButton fullWidth onClick={onCheckout}>
                      Checkout
                    </SuccessButton>
                  </Stack>
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
                {/* <SuccessButton fullWidth>Checkout</SuccessButton> */}
                <Stack direction="column">
                  <Typography sx={{ marginBottom: "50px" }}>
                    Total Amount : {calcTotalAmount()}
                  </Typography>
                  <SuccessButton fullWidth onClick={onCheckout}>
                    Checkout
                  </SuccessButton>
                </Stack>
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
