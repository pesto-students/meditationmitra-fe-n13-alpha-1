import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import {TextGray, TextBlack} from "../components/Typography";

const Profile = () => {
  return (
    <>
      <DeskView>
      <TextGray>Account Settings</TextGray>
      <TextBlack>Profile</TextBlack>
      <TextBlack>My Enrolled Courses</TextBlack>
      <TextBlack>Payment History</TextBlack>
      <TextGray>Support</TextGray>
      <TextBlack>About Meditation Mitra</TextBlack>
      <TextBlack>Frequently asked questions</TextBlack>
      <TextBlack>Share Meditation Mitra</TextBlack>
      </DeskView>
      <MobileView>
      <TextGray>Account Settings</TextGray>
      <TextBlack>Profile</TextBlack>
      <TextBlack>My Enrolled Courses</TextBlack>
      <TextBlack>Payment History</TextBlack>
      <TextGray>Support</TextGray>
      <TextBlack>About Meditation Mitra</TextBlack>
      <TextBlack>Frequently asked questions</TextBlack>
      <TextBlack>Share Meditation Mitra</TextBlack>
      </MobileView>
      <DeskView>Profile page</DeskView>
      <MobileView>Profile page</MobileView>
    </>
  );
};

export default Profile;
