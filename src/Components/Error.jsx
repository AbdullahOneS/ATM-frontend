import React, { useEffect } from "react";
import "../styles.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const Error = ({ message, handlePageChange, timerId, setTimerId }) => {
  function myFunction() {
    handlePageChange("Welcome");
  }

  // Set the timeout when the component mounts

  useEffect(() => {
    const id = setTimeout(myFunction, 5000);

    setTimerId(id);

    // Clear the timer when the component unmounts

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: "#76C0DB",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "block",
            height: "fit-content",
            padding: "5%",
            backgroundColor: "white",
            boxShadow:
              "rgba(4, 4, 5, 0.39) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 16px 16px",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{
              width: "100%",
              height: "fit-content",
              textAlign: "center",
              color: "red",
            }}
          >
            Error
            <ExclamationCircleOutlined
              style={{ color: "red", fontSize: "28px", marginLeft: "9%" }}
            />
          </h1>

          <div
            style={{
              margin: "30px 0px",
              width: "100%",
              height: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
