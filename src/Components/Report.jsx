import React, { useState } from "react";
import { LockOutlined } from "@ant-design/icons";
import DetailField from "./DetailField";
import { Button, Form } from "antd";
import { Input } from "antd";
import axios from "axios";
import Api from "../Api";

const Report = ({
  screenOutput,
  handlePageChange,
  // setScreenOutput,
  reportType,
  reportData,
  setReportData,
  GetAccountHolder,
  sendOTP,
  verifyOTP,
}) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  let otpStar = "";
  for (let i = 0; i < screenOutput.length; i++) {
    otpStar += "*   ";
  }
  // const [accountNo, setAcoountNo] = useState(screenOutput);
  // console.log(reportData);
  return (
    <>
      <div
        style={{ backgroundColor: "#76C0DB", width: "100%", height: "100%" }}
        className="center-block"
      >
        <div className="report-block ">
          <span className="center-block">
            <LockOutlined style={{ fontSize: "35px", color: "green" }} />
          </span>
          <div
            style={{ textAlign: "center", fontSize: "large", marginTop: "1%" }}
          >
            Report Card
          </div>
          <div style={{ textAlign: "center", margin: "2%" }}>
            {reportData.errorMsg === "" && reportData.status === "pending" ? (
              ""
            ) : reportData.errorMsg === "OTP sent successfully" &&
              reportData.status === "pending" ? (
              <div style={{ color: "green" }}>{reportData.errorMsg}</div>
            ) : reportData.errorMsg === "OTP cannot be sent..Try Again" &&
              reportData.status === "pending" ? (
              <div style={{ color: "red" }}>{reportData.errorMsg}</div>
            ) : reportData.status === "successful" ? (
              <div style={{ color: "green" }}>Card Blocked⚠</div>
            ) : (
              <div style={{ color: "red" }}>Try Again Attempt Failed</div>
            )}
          </div>
          <div style={{ marginTop: "20px", fontWeight: "bold" }}>
            {reportData.AccountHolderName === ""
              ? "Enter Account number : "
              : `Account Holder : ${reportData.AccountHolderName}`}
          </div>
          {reportData.buttonText.trim() === "Proceed" ? (
            <div
              className="center-block"
              style={{
                margin: "1%",
                color: "black",
                padding: "12px 20px",
                margin: "8px 0",
                display: "inline-block",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "80%",
                height: "50px",
              }}
            >
              {screenOutput}
            </div>
          ) : (
            ""
          )}
          {reportData.errorMsg === "OTP sent successfully" ? (
            <div>
              <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                Enter OTP :{" "}
              </div>
              <div
                className="center-block"
                style={{
                  margin: "1%",
                  color: "black",
                  padding: "12px 20px",
                  margin: "8px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "80%",
                  height: "50px",
                  fontWeight: "bold",
                }}
              >
                {otpStar}
              </div>
            </div>
          ) : (
            ""
          )}
          <Form
            form={form}
            name="horizontal_login"
            style={{
              margin: "2%",
            }}
            className="center-block"
          >
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  //   className="center-block"
                  htmlType="submit"
                  disabled={
                    screenOutput.length < reportType ||
                    reportData.buttonText === "OTP sent..."
                  }
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    if (reportData.AccountHolderName === "") {
                      GetAccountHolder();
                    } else if (
                      reportData.buttonText === "Send OTP" ||
                      reportData.buttonText === "Resend OTP"
                    ) {
                      // setScreenOutput("");
                      sendOTP();
                    } else if (
                      reportData.buttonText === "Verify" &&
                      reportData.status === "pending"
                    ) {
                      verifyOTP();
                    } else {
                      handlePageChange("Welcome");
                    }
                  }}
                >
                  {reportData.buttonText}
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Report;
