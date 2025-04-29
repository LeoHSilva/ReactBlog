import useControls, { FeedType } from "../../stores/useControls"
import CardForm from "./CardForm";
import HeroForm from "./HeroForm";
import SignUpForm from "./SignUpForm";
import VideoForm from "./VideoForm";

const FormDisplay = () => {
  const { feedType } = useControls();
  switch (feedType) {
    case FeedType.HERO:
      return <HeroForm />
    case FeedType.CARDS:
      return <CardForm />
    case FeedType.SIGNUP:
      return <SignUpForm />
    case FeedType.VIDEO:
      return <VideoForm />
    default:
      return <></>
  }
}

export default FormDisplay;