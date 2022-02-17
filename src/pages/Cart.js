import { useSelector } from "react-redux";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
// import { courses } from "../__mock__/__mock__";
import Box from "../components/Box";
import { SuccessButton } from "../components/Buttons";
import Grid from "../components/Grid";

const Cart = () => {
  const { cart } = useSelector((state) => state.courseReducer);
  return (
    <>
      <DeskView>
        <CourseList cart courses={cart} />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <SuccessButton fullWidth>Checkout</SuccessButton>
            </Grid>
          </Grid>
        </Box>
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
