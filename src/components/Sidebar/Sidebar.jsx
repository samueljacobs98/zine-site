import "./Sidebar.scss";
import sampleprofilepic from "../../assets/images/SamplePhoto.jpg";

const Sidebar = ({ showSidebar, username }) => {
  const animationStyle = showSidebar ? "open" : "close";
  return (
    <div className={` sidebar-block-${animationStyle}`}>
      <div className="sidebar-profile">
        <img className="sidebar-picture" src={sampleprofilepic} alt="" />
        <p className="sidebar-name">@{username}</p>
      </div>
      <div className="sidebar-links">
        <a className="sidebar-link" href="/">
          Home
        </a>
        <a className="sidebar-link" href="/">
          Followers
        </a>
        <a className="sidebar-link" href="/">
          Following
        </a>
        <a className="sidebar-link" href="/">
          Trending
        </a>
      </div>

      <button className="sidebar-button">LOG OUT</button>
    </div>
  );
};

export default Sidebar;
