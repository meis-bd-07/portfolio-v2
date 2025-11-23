import React, { useState } from "react";

const RightClickMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Triggered when user right-clicks
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default browser menu
    setPosition({ x: e.clientX, y: e.clientY });
    setMenuVisible(true);
  };

  const handleOptionClick = (option: string) => {
    console.log(option);
    setMenuVisible(false);
  };

  const handleClickOutside = () => {
    setMenuVisible(false);
  };

  return (
    <div
      onContextMenu={handleContextMenu} // <- right-click event
      style={{
        width: "300px",
        height: "150px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "context-menu",
        position: "relative",
      }}
    >
      Right-Click Me
      {menuVisible && (
        <>
          <ul
            style={{
              position: "absolute",
              top: position.y,
              left: position.x,
              listStyle: "none",
              padding: "10px",
              margin: 0,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              zIndex: 1000,
            }}
          >
            <li onClick={() => handleOptionClick("Close Window")}>Close Window</li>
            <li onClick={() => handleOptionClick("Go to Details")}>Go to Details</li>
            <li onClick={() => handleOptionClick("Other Action")}>Other Action</li>
          </ul>
          {/* Overlay to detect clicks outside */}
          <div
            onClick={handleClickOutside}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 999,
            }}
          />
        </>
      )}
    </div>
  );
};

export default RightClickMenu;
