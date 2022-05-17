import "./NavBar.scss";
import Menu from "../../assets/images/Menu.svg";
import Search from "../../assets/images/Search.svg";
import Upload from "../../assets/images/Upload.svg";
import Notifications from "../../assets/images/Notifications.svg";
import useWindowSize from "../../hooks/useWindowsSize.js";

const NavBar = () => {
  const windowIsDesktop = useWindowSize(1024);
  const zineName = "ZINESTORE";

  const mobileNav = (
    <div className="NavBar">
      <h2 className="NavBar__title">{zineName}</h2>
      <img className="NavBar__menu" src={Menu} alt="Menu Icon" />
    </div>
  );

  const desktopNav = (
    <div className="NavBarDesktop">
      <img src={Menu} alt="Menu Icon" />
      <h2 className="NavBarDesktop__title">{zineName}</h2>
      <div className="NavBarDesktop__icons">
        <img src={Search} alt="Search Icon" />
        <img src={Upload} alt="Upload Icon" />
        <img src={Notifications} alt="Notifications Icon" />
      </div>
    </div>
  );

  const NavBarJsx = (
    <>
      {!windowIsDesktop && mobileNav}
      {windowIsDesktop && desktopNav}
    </>
  );
  return NavBarJsx;
};

export default NavBar;
