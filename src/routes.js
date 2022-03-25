import Courses from "./pages/Courses";
import EnrolledCourses from "./pages/EnrolledCourses";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import PostLogin from "./pages/PostLogin";
import CourseDetails from "./pages/CourseDetails";
import Cart from "./pages/Cart";
import AddNewCourse from "./pages/AddNewCourse";
import PaymentSuccess from "./pages/PaymentSuccess";

const routes = [
  {
    path: "/enrolled-courses",
    element: <EnrolledCourses />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/user/add-course",
    element: <AddNewCourse />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/post-login",
    element: <PostLogin />,
  },
  {
    path: "/course-details/:slug",
    element: <CourseDetails />,
  },
  {
    path: "/user/cart",
    element: <Cart />,
  },
  {
    path: "/user/payment-success",
    element: <PaymentSuccess />,
  },
  // {
  //     path: '*',
  //     element: <NotFound/>
  // }
];

export default routes;
