import React from "react";
const PageHeader = ({children}) => {
  return (
    <header className="bg-white w-full h-9 shadow-md border-b-2 grid grid-cols-3">
      {children}
    </header>
  );
};

export default PageHeader;
