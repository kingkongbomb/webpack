import React, { useState, useEffect } from "react";
import "../styles/color.css";

export default function Color() {
  const [color, setColor] = useState("white");

  function genColorCode() {
    let code;
    do {
      code = Math.floor(Math.random() * 16777216).toString(16);
    } while (code.length !== 6);

    return "#" + code.toUpperCase();
  }

  function copyCode() {
    navigator.clipboard.writeText(color);
  }

  const [contOffset, setContOffset] = useState(0);
  useEffect(() => {
    setContOffset(document.querySelector(".color-container")?.offsetTop);
  }, []);

  return (
    <div
      className="color-container"
      style={{
        background: color,
        height: `calc(100vh - ${contOffset}px)`,
      }}
    >
      <input
        placeholder="Enter color code"
        value={color}
        onChange={(e) => setColor(e.target.value.toUpperCase())}
        onFocus={(e) => e.target.select()}
        style={{ color: color }}
        onClick={copyCode}
      />

      <button style={{ color }} onClick={() => setColor(genColorCode())}>
        Generate Color!
      </button>
    </div>
  );
}
