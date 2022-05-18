import "./ZineCardContainer.scss";
import ZineCard from "../ZineCard/ZineCard";
import me from "../../assets/images/me.jpeg";
import Zine from "../../assets/images/Zine.png";

const ZineCardContainer = () => {
  return (
    <ZineCard
      title={"title"}
      image={me}
      profileName={"profileName"}
      profileImage={Zine}
    />
  );
};

export default ZineCardContainer;
