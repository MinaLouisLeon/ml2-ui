// import Panel from "./Panelq";
import Panel from "./Panel";
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
const PanelSpace = ({ position = "left", children }) => {
  const [panelsState, setPanelsState] = useState({});
  console.log(panelsState)
  const handleState = () => {
    let panelsObj = {};
    React.Children.map(children, (child) => {
      panelsObj = {
        ...panelsObj,
        [child.props.id]: {
          children: child.props.children,
          isOpened: false,
        },
      };
    });
    console.log(panelsObj);
    setPanelsState(panelsObj);
  };
  useEffect(() => {
    handleState();
  }, []);
  const getPanelClass = (id) => {
    return panelsState[id].isOpened ? "" : "hidden";
  };
  const handleTogglePanels = (id) => {
    let stateObj = panelsState;
    Object.keys(panelsState).map((key) => {
      if (key === id) {
        stateObj = {
          ...stateObj,
          [key]: {
            ...stateObj[key],
            isOpened: !stateObj[key].isOpened,
          },
        };
      } else {
        stateObj = {
          ...stateObj,
          [key]: {
            ...stateObj[key],
            isOpened: false,
          },
        };
      }
    });
    setPanelsState(stateObj);
  };
  return (
    <>
      {position === "left" && (
        <div className="h-full absolute left-0 top-0 bottom-0 w-3/12 flex">
          {children && (
            <>
              <div
                id="iconsPanel"
                className="bg-gray-100 h-full w-10 border-r-2 min-w-max flex flex-col flex-wrap justify-start content-center"
              >
                {React.Children.map(children, (child) => {
                  return (
                    <div onClick={() => handleTogglePanels(child.props.id)}>
                      <IconContext.Provider
                        value={{
                          className:
                            "w-10 h-10 my-1 hover:border hover:rounded-md",
                        }}
                      >
                        {child.props.icon}
                      </IconContext.Provider>
                    </div>
                  );
                })}
              </div>
              {Object.keys(panelsState).map((key) => {
                return (
                  <div
                    className={`h-full w-full border-r-2 pl-2 ${getPanelClass(
                      key
                    )}`}
                  >
                    {panelsState[key].children}
                  </div>
                );
              })}
            </>
          )}
          {/* <Panel position={position}/> */}
        </div>
      )}
    </>
  );
};

export default PanelSpace;
