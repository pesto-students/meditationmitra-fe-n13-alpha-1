import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import PostLogin from "./PostLogin";

const Home = () => {
  return (
    <>
      <DeskView>Home page</DeskView>
      <MobileView>
        <PostLogin />
      </MobileView>
    </>
  );
};

export default Home;
