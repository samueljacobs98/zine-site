import "./ZineCardContainer.scss";
import ZineCard from "../ZineCard/ZineCard";
import profile from "../../assets/images/profile.png";
import Zine from "../../assets/images/Zine.png";

const ZineCardContainer = () => {
  return (
    <ZineCard
      title="CEREAL"
      Zineimage={Zine}
      profileName="JOHN SMTIH"
      profileImage={profile}
    />
  );
};

export default ZineCardContainer;
