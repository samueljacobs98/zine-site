import "./ZineCard.scss";

const ZineCard = ({ title, Zineimage, profileName, profileImage }) => {
  return (
    <div className="zineCard">
      <h2 className="zineCard__title">{title}</h2>
      <h3 className="zineCard__profileName">{profileName}</h3>
      <img className="zineCard__profileImage" src={profileImage} alt="" />
      <img className="zineCard__zineImage" src={Zineimage} alt="" />
    </div>
  );
};

export default ZineCard;
