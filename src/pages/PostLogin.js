import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import {TextDark,TextBlack} from "../components/Typography";
import {PrimaryButton} from "../components/Buttons";
import CenterContent from "../components/CenterContent";

const PostLogin = () => {
  return (
    <>
      <DeskView>
        <CenterContent>
        <br/>
        <br/>
        <PrimaryButton> Register as User </PrimaryButton>
        <br/>
        <br/>
        <PrimaryButton> Register as Coach </PrimaryButton>
        </CenterContent>
      </DeskView>
    <MobileView> 
      <CenterContent>
        <TextBlack>Welcome to</TextBlack>
        <TextDark>Meditation Mitra</TextDark>
        <TextBlack>How would you like to register yourself?</TextBlack>
        <br/>
        <br/>
        <PrimaryButton> Register as User </PrimaryButton>
        <br/>
        <br/>
        <PrimaryButton> Register as Coach </PrimaryButton>
      </CenterContent>
    </MobileView>
      <DeskView>PostLogin page</DeskView>
      <MobileView>PostLogin page</MobileView>
    </>
  );
};

export default PostLogin;
