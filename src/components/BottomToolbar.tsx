// import { useState } from "react";
// import colapsePanel from "../assets/colapse-panel.svg";
// import openPanelIcon from "../assets/open-panel.svg";

const BottomToolbar: React.FC = () => {
  // const [panelToggle, setPanelToggle] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "38px",
        marginTop: "4px",
        borderTopLeftRadius: "3px",
        borderTopRightRadius: "3px",
        padding: "2px",
      }}
    >
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div></div>
        <div className="panel-control">
          {/* <img
            src={panelToggle ? colapsePanel : openPanelIcon}
            style={{
              padding: "10px 7px",
              borderRadius: "3px",
              background: "#EBEBEB",
            }}
            onClick={() => {
              setPanelToggle(!panelToggle);
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BottomToolbar;
