import { useState } from "react";
import crossIcon from "../assets/cross.svg";
import measureIcon from "../assets/measure.svg";
import trendLineIcon from "../assets/trend-line.svg";

const LeftToolbar: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>("cross");

  const tools = [
    { name: "cross", icon: crossIcon },
    { name: "measure", icon: measureIcon },
    { name: "trendline", icon: trendLineIcon },
  ];

  return (
    <div
      style={{
        background: "#fff",
        width: "52px",
        height: "calc(100vh - 42px)",
        marginRight: "4px",
        borderTopRightRadius: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "max-content",
            height: "max-content",
          }}
        >
          {tools.map((tool) => (
            <img
              key={tool.name}
              src={tool.icon}
              className={`tool-icon ${
                activeTool === tool.name ? "active" : ""
              }`}
              style={{
                padding: "3px",
                borderRadius: "5px",
                marginBottom: "5px",
                cursor: "pointer",
              }}
              onClick={() => setActiveTool(tool.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftToolbar;
