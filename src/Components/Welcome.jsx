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
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            // border: "2px solid green",
            height: "45%",
            marginTop: "13%",
            // marginLeft: "10%",
            // backgroundColor: "#0E77BD",
            color: "#0E77BD",
            fontSize: "20pt",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Welcome to</h1>
            <h2>ABC Bank</h2>
          </div>
          <div>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
              style={{ width: "250px" }}
              onClick={() => handlePageChange("InsertCard")}
            >
              Insert Card
            </Button>

            <div
              style={{
                color: "red",
                fontSize: "10pt",
                textDecoration: "underline",
                marginTop: "13px",
                cursor: "pointer",
                fontFamily: "Arial",
              }}
              onClick={() => handlePageChange("Report")}
            >
              Block the card
            </div>
          </div>
        </div>

        <div
          style={{
            // border: "1px solid green",
            position: "absolute",
            bottom: "3%",
            width: "100%",
          }}
        >
          {/* rasik */}
          <img
            src={safetymeasures}
            alt="safety measures"
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
