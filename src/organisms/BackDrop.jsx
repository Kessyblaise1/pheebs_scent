import React from "react";

export const Backdrop = ({ show, onClick }) => {
  const backDropStyles = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.7)"
  }
  
  return (
    show && (
      <div
        style={backDropStyles}
        onClick={onClick}
      ></div>
    )
  );
};
