import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
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
import CheckoutForm from "./CheckoutForm";
import { PaymentPopup } from "../components/Popup";
import {
  COLUMN,
  EMPTY_CART_IMG,
  EMPTY_STRING,
  STRIPE,
  _100_PERC,
} from "../utils/Constants";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const StyleMarginBottom = { marginBottom: "50px" };

const Cart = () => {
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState(EMPTY_STRING);
  const [open, setOpen] = useState(false);
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
      setClientSecret(respData.clientSecret);
      setOpen(true);
      //if (respData.status === 200) dispatch(courseActions.clearCart());
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
            <img src={EMPTY_CART_IMG} style={{ width: _100_PERC }} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <img src={EMPTY_CART_IMG} />
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

  const appearance = {
    theme: STRIPE,
  };
  const options = {
    clientSecret,
    appearance,
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
                  <Stack direction={COLUMN}>
                    <Typography sx={StyleMarginBottom}>
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
              <CourseList mobile cart remove={removeItem} courses={cart} />
              <Box mt={5}>
                <Stack direction={COLUMN}>
                  <Typography sx={StyleMarginBottom}>
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
      <PaymentPopup
        open={open}
        childern={
          clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )
        }
      />
    </>
  );
};

export default Cart;
