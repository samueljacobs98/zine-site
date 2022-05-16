import "./NavBar.scss";
import Menu from "../../assets/images/Menu.svg";
import Search from "../../assets/images/Search.svg";
import Upload from "../../assets/images/Upload.svg";
import Notifications from "../../assets/images/Notifications.svg";
import useWindowSize from "../../hooks/useWindowsSize.js";

const NavBar = () => {
  const windowIsDesktop = useWindowSize(1024);

  const mobileNav = (
    <div className="NavBar">
      <h2 className="NavBar__title">ZINESTORE</h2>
      <img className="NavBar__menu" src={Menu} alt="" />
    </div>
  );

  const desktopNav = (
    <div className="NavBarDesktop">
      <img src={Menu} alt="" />
      <h2 className="NavBarDesktop__title">ZINESTORE</h2>
      <div className="NavBarDesktop__icons">
        <img src={Search} alt="" />
        <img src={Upload} alt="" />
        <img src={Notifications} alt="" />
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
