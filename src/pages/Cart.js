import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import { courses } from "../__mock__/__mock__";
import Box from "../components/Box";
import { SuccessButton } from "../components/Buttons";

const Cart = () => {
  return (
    <>
      <DeskView>
        <CourseList cart courses={courses.slice(0, 2)} />
        <Box>
          <SuccessButton>Checkout</SuccessButton>
        </Box>
      </DeskView>
      <MobileView>
        <Box mt={5}>
          <CourseList mobile cart courses={courses.slice(0, 2)} />
          <Box mt={5}>
            <SuccessButton fullWidth>Checkout</SuccessButton>
          </Box>
        </Box>
      </MobileView>
    </>
  );
};

export default Cart;
