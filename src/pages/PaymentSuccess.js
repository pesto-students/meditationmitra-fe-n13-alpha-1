import { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { courseActions } from "../api/reducers/courseReducer";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Box from "../components/Box";
import { EnrollCourse } from "../api/services/courseService";
import { PAYMENT_SUCCESS, _100_PERC } from "../utils/Constants";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.courseReducer);
  useLayoutEffect(() => {
    EnrollCourse(cart.map((item) => item._id))
      .then((response) => {
        console.log(response);
        if (response.status === 200) dispatch(courseActions.clearCart());
      })
      .catch((err) => console.log(err));
  }, []);

  const Success = ({ mobile }) => (
    <>
      <Container>
        <Box sx={{ marginTop: "45px" }}>
          {mobile ? (
            <img src={PAYMENT_SUCCESS} style={{ width: _100_PERC }} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <img src={PAYMENT_SUCCESS} width={_100_PERC} />
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );

  Success.propTypes = {
    mobile: PropTypes.bool,
  };

  return (
    <>
      <DeskView>
        <Success />
      </DeskView>
      <MobileView>
        <Success mobile />
      </MobileView>
    </>
  );
};

export default PaymentSuccess;
