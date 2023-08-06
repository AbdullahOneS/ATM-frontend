import React from "react";
import "../styles.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import InsertCard from "../Pages/InsertCard";
import safetymeasures from "../images/safetymeasures.png";

import atm from "../images/atmImageForWelcomepage.png";
const Welcome = ({ handlePageChange }) => {
  return (
    <>
      {/* <div className='output-screen'> */}
      <div
        className="welcome"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={atm} alt="atm" width="100%" />
        {/* <img src='src\images\atmImageForWelcomepage.png' alt="" srcset=""  width='100%' height='100%'/> */}
      </div>
      <div
        style={{
          // padding: "10%",
          fontFamily: "Arvo, serif",
          // border: "2px solid red",
          width: "100%",
          // position: "relative",
        }}
      >
        <div
          style={{
            // border: "2px solid green",
            marginTop: "20%",
            marginLeft: "10%",
            // backgroundColor: "#0E77BD",
            color: "#0E77BD",
            fontSize: "18pt",
          }}
        >
          <h1>Welcome To</h1>
          <h2>ABC Bank</h2>
        </div>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          style={{
            position: "absolute",
            top: "50%",
            left: "45%",
            width: "20%",
          }}
          onClick={() => handlePageChange("InsertCard")}
        >
          Insert Card
        </Button>
        <div
          style={{
            // border: "1px solid green",
            position: "absolute",
            bottom: "10%",
            width: "45%",
          }}
        >
          {/* rasik */}
          <img
            src={safetymeasures}
            alt="safety measures"
            srcset=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* // </div> */}
    </>
  );
};

export default Welcome;
