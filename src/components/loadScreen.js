import { LinearProgress } from "@material-ui/core";
import React from "react";
import "../styles/loadScreen.css";
import "../styles/loadScreen2.css";

{/* <div className="loader-container">
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
  <div className="loader"></div>
  <span className="loader-text">Loading...</span>
</div> */}

export default function loader() {
  return <LinearProgress />
}
