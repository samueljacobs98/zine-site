import "./ZineCard.scss";

const ZineCard = ({ title, image, profileName, profileImage }) => {
  return (
    <div className="zineCard">
      <h2 className="zineCard__title">{title}</h2>
      <img className="zineCard__image" src={image} alt="" />
      <h3 className="zineCard__profileName">{profileName}</h3>
      <img className="zineCard__profileImage" src={profileImage} alt="" />
    </div>
  );
};

export default ZineCard;
