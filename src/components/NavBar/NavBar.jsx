import "./NavBar.scss";
import Menu from "../../assets/images/Menu.svg";
import Search from "../../assets/images/Search.svg";
import Upload from "../../assets/images/Upload.svg";
import Notifications from "../../assets/images/Notifications.svg";
import useWindowSize from "../../hooks/useWindowsSize.js";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";

const NavBar = () => {
  const windowIsDesktop = useWindowSize(1024);
  const zineName = "ZINESTORE";

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const node = useRef();

  const trackSidebar = (e) => {
    if (node.current.contains(e.target)) {
      // inside scope click
      return;
    }
    // outside scope click
    setShowSidebar(false);
  };

  useEffect(() => {
    console.log("yo");
    document.addEventListener("mousedown", trackSidebar);
    return () => {
      document.removeEventListener("mousedown", trackSidebar);
    };
  }, []);

  const mobileNav = (
    <header>
      <div className="NavBar">
        <h2 className="NavBar__title">{zineName}</h2>
        <img
          onClick={toggleSidebar}
          className="NavBar__menu"
          src={Menu}
          alt="Menu Icon"
        />
      </div>
      <div ref={node}>
        {" "}
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} username={"placeholder"} />
        )}
      </div>
    </header>
  );

  const desktopNav = (
    <header>
      {" "}
      <div className="NavBarDesktop">
        <img ref={node} onClick={toggleSidebar} src={Menu} alt="Menu Icon" />
        <h2 className="NavBarDesktop__title">{zineName}</h2>
        <div className="NavBarDesktop__icons">
          <img src={Search} alt="Search Icon" />
          <img src={Upload} alt="Upload Icon" />
          <img src={Notifications} alt="Notifications Icon" />
        </div>
      </div>
      <div ref={node}>
        {" "}
        {showSidebar && (
          <Sidebar showSidebar={showSidebar} username={"placeholder"} />
        )}
      </div>
    </header>
  );

  const NavBarJsx = (
    <>
      <header>
        {!windowIsDesktop && mobileNav}
        {windowIsDesktop && desktopNav}
      </header>
    </>
  );
  return NavBarJsx;
};

export default NavBar;
