import React from "react";
import Header from "../../components/Header";

const DefaultLayout =
  (Components) =>
  ({ ...props }) => {
    return (
      <>
        <div style={{ flex: 1}} className="wrapper">
            <Header />
            <div style={{
                
            }}>
            <Components {...props} />
            </div>
        </div>
      </>
    );
  };

export default DefaultLayout;
