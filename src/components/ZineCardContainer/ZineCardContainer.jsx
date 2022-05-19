import "./ZineCardContainer.scss";
import ZineCard from "../ZineCard/ZineCard";
import zineCardData from "../../assets/MockData";

const ZineCardContainer = () => {
  return zineCardData.map((zine) => {
    return (
      <ZineCard
        key={zine.id}
        title={zine.title}
        Zineimage={zine.zineImage}
        profileName={zine.name}
        profileImage={zine.profileimage}
      />
    );
  });
};

export default ZineCardContainer;
