import React, { useState } from "react";
import PageContent from "./PageContent";
import "../../index.css";
const ML2Page = ({ children}) => {
  return (
    <div className={`relative w-screen h-screen m-0`}>
      <>
        {children.length ? (
          <>
            {children[0].type.name === "PageHeader" && (
              <PageContent isHeaderEnabled={true}>{children}</PageContent>
            )}
          </>
        ) : (
          <PageContent isHeaderEnabled={false}>{children}</PageContent>
        )}
      </>
    </div>
  );
};

export default ML2Page;
