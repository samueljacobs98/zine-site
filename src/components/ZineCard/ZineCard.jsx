import "./ZineCard.scss";

const ZineCard = ({ title, Zineimage, profileName, profileImage }) => {
  return (
    <div className="zineCard">
      <div className="zineCard__leftContent">
        <h2 className="zineCard__leftContent-title">{title}</h2>
        <h3 className="zineCard__leftContent-profileName">{profileName}</h3>
        <img
          className="zineCard__leftContent-profileImage"
          src={profileImage}
          alt=""
        />
      </div>
      <div className="zineCard__rightContent">
        <img className="zineCard__zineImage" src={Zineimage} alt="" />
      </div>
    </div>
  );
};

export default ZineCard;
