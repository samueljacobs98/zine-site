import "./ZineCardContainer.scss";
import ZineCard from "../ZineCard/ZineCard";
import me from "../../assets/images/me.jpeg";
import Zine from "../../assets/images/Zine.png";

const ZineCardContainer = () => {
  return (
    <ZineCard
      title="CEREAL"
      Zineimage={Zine}
      profileName="JOHN SMTIH"
      profileImage={me}
    />
  );
};

export default ZineCardContainer;
