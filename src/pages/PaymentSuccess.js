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

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.courseReducer);
  //   const [tempCart, setTempCart] = useState([]);
  useLayoutEffect(() => {
    // setTempCart(cart);
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
            <img src="/images/Payment-success.png" style={{ width: "100%" }} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <img src="/images/Payment-success.png" width="100%" />
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

// PaymentSuccess.propTypes = {};

export default PaymentSuccess;
