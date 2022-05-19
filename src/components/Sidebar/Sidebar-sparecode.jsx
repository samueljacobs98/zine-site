import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.scss";

export default function SidebarNav() {
  const [isSidebar, initSidebar] = useState(true);

  const openSidebar = (isSidebar) => {
    // console.log(isSidebar)
    return initSidebar(!isSidebar);
  };

  const node = useRef();

  const trackSidebar = (e) => {
    if (node.current.contains(e.target)) {
      // inside scope click
      return;
    }
    // outside scope click
    initSidebar(false);
  };

  useEffect(() => {
    console.log("yo");
    document.addEventListener("mousedown", trackSidebar);
    return () => {
      document.removeEventListener("mousedown", trackSidebar);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h2>React Animated Sidebar Example</h2>
          <span
            ref={node}
            className="hamburger"
            onClick={() => {
              openSidebar(isSidebar);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isSidebar ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </span>
        </nav>

        <div
          ref={node}
          className="sidebar-block"
          style={{ left: isSidebar ? "0" : "-260px" }}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Portfolio</a>
          <a href="#">Profile</a>
          <a href="#">Sign out</a>
        </div>
      </header>
    </>
  );
}
