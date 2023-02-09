import React from "react";
import ReactDOM from "react-dom";

/**
 *  Portals are used to render components outside the main DOM
 *  Usage?
 *      - Child components like tooltip, modals etc are rendered outside the main DOM
 * */ 

function PortalDemo() {
  return ReactDOM.createPortal(<h1>Portal Demo</h1>, document.getElementById("portal"));
}

export default PortalDemo;
