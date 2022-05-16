import "./NavBar.scss";
import Menu from "../../assets/images/Menu.svg";
// import useWindowSize from "../../hooks/useWindowsSize.js";

const NavBar = () => {
  // const windowIsDesktop = useWindowSize(1024);

  return (
    <div className="NavBar">
      <h2 className="NavBar__title">ZINESTORE</h2>
      <img className="NavBar__menu" src={Menu} alt="" />
    </div>
  );
};

export default NavBar;
