import React, { useEffect } from "react";

const Thankyou = ({ handlePageChange }) => {
  useEffect(() => {
    setTimeout(() => {
      handlePageChange("Welcome");
    }, 5000);
  }, []);

  return (
    <>
      <div
        style={{
          //   border: "2px solid red",

          width: "100%",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          //   backgroundColor: "#398fae",

          backgroundImage:
            "linear-gradient(to right, #4bc6f3 0%, #2e59f8 100%)",
        }}
      >
        <div
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

            textAlign: "center",

            padding: "10%",

            border: "5px solid #4bc6f3",

            color: "white",

            // fontFamily: "Oswald, sans-serif",

            fontFamily: "Kanit, sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "50pt",
            }}
          >
            Thank You
          </h1>

          <h3>For visiting ABC Bank</h3>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
