import React, { useState } from "react";
import DetailField from "../Components/DetailField";
import PasswordField from "../Components/PasswordField";
import { Alert, Button } from "antd";
import Api from "../Api";

const InputField = ({
  message,
  handlePageChange,
  // setWithdrawalAmt,
  withdrawalAmt,
  denominations,
  cardNo,
  type,
  pin,
  balanceCheck,
  Withdrawal,
  transactionType,
  Amount,
  AmountCheck,
  accountNo,
  CheckReceiverAcc,
  ReceiverAccountHolder,
  setTranferAmt,
  transferAmt,
  depositAmount,
  otp,
  resendlink,
  verifyOTPWithdrawal,
  disable,
  errormessage,
  setErrorMessage,
}) => {
  const [inputValue, setInputValue] = useState("");
  let page = "";
  let input = "";
  let buttonText = "";
  let resendotpLink = "";
  let otpmessage = "";
  let AccountHolderName = "";
  let transferBlock = "";

  const handleClick = () => {
    if (message === "Enter Account Number") {
      if (accountNo.length === 14) {
        CheckReceiverAcc();
      } else {
        setErrorMessage("Please Enter valid 14 digits account numbers");
      }
    } else if (message === "Enter Pin") {
      if (transactionType === "inquiry") {
        if (pin.length == 4) {
          balanceCheck();
        } else {
          setErrorMessage("Please Enter valid 4 digits Pin");
        }
      } else if (transactionType === "withdrawal") {
        if (pin.length === 4) {
          Withdrawal();
        } else {
          setErrorMessage("Please Enter valid 4 digits Pin");
        }
      } else if (transactionType === "Fund Transfer") {
        if (pin.length === 4) {
          transferAmt();
        } else {
          setErrorMessage("Please Enter valid 4 digits Pin");
        }
      } else if (transactionType === "deposit") {
        if (pin.length === 4) {
          depositAmount();
        } else {
          setErrorMessage("Please Enter valid 4 digits Pin");
        }
      }
    } else if (message === "Enter Amount") {
      if (transactionType === "transfer") {
        setTranferAmt();
      } else if (transactionType === "withdrawal" && disable === 0) {
        AmountCheck();
      }
    } else if (message === "Enter OTP") {
      if (otp.length === 6) {
        verifyOTPWithdrawal();
      } else {
        setErrorMessage("Enter 6 digit OTP");
      }
    }
  };
  // let loading = 0;
  if (transactionType === "transfer") {
    // AccountHolderName = {ReceiverAccountHolder};
    transferBlock = (
      <div
        style={{
          color: "black",
          fontSize: "x-large",
          textAlign: "center",
          padding: "1%",
          margin: "1%",
          backgroundColor: "#ffe484",
        }}
      >
        Transferring to {ReceiverAccountHolder}
      </div>
      // var text = `Transferring to ${ReceiverAccountHolder}`;
      // <Alert
      //   message="Transferring to ${ReceiverAccountHolder}"
      //   type="warning"
      // />
    );
  }
  if (message === "Enter Amount") {
    input = (
      <DetailField
        message={message}
        Amount={Amount}
        transactionType={transactionType}
      />
    );
    page = "Denominationw";
    buttonText = "Proceed";
  } else if (message === "Enter Pin") {
    input = (
      <PasswordField message="pin" setInputValue={setInputValue} pin={pin} />
    );
    page = "ReceiptW";
    buttonText = "Proceed";
  } else if (message === "Enter Account Number") {
    input = <DetailField message={message} accountNo={accountNo} />;
    page = "InputFieldEnterAmount";
    buttonText = "Proceed";
  } else {
    input = <PasswordField message="otp" pin={otp} />;
    page = "DenominationW";
    buttonText = "Verify";
    resendotpLink = (
      <button
        style={{
          textAlign: "center",
          width: "100%",
          textDecoration: "underline",
          color: "purple",
          cursor: "pointer",
          backgroundColor: "#76C0DB",
          outline: "none",
          border: "none",
          marginTop: "20px",
        }}
        onClick={() => resendlink()}
      >
        <a>Resend OTP</a>
      </button>
    );
    otpmessage = (
      <div style={{ textAlign: "center", marginBottom: "8%", color: "white" }}>
        OTP sent successfully
      </div>
    );
  }

  return (
    <>
      {/* {transactionType} */}
      {/* {ReceiverAccountHolder} */}

      <div
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundColor: "#76C0DB",
          borderRadius: "10px",
          //   border: "2px solid red",
        }}
      >
        {errormessage !== "" ? (
          <Alert message={errormessage} type="error" showIcon closable />
        ) : (
          ""
        )}
        {transferBlock}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "75%",
            backgroundColor: "#76C0DB",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "block",
              height: "60%",
              padding: "5%",
            }}
          >
            {otpmessage}
            <h2
              style={{
                width: "100%",
                height: "fit-content",
                textAlign: "center",
                color: "white",
              }}
            >
              {message}
            </h2>
            {input}
            {resendotpLink}
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "6% 0%",
              }}
            >
              {/* {message === "Enter Pin"
                ? pin.length < 4
                : message === "Enter OTP"
                ? pin.length < 6
                : message === "Enter Account Number"
                ? accountNo.length < 14
                : Amount.length < 0} */}
              <Button
                // disabled={
                //   message === "Enter Pin"
                //     ? pin.length < 4
                //     : message === "Enter OTP"
                //     ? otp.length < 6
                //     : message === "Enter Account Number"
                //     ? accountNo.length < 14
                //     : Amount.length < 0
                // }
                style={{
                  backgroundColor: "#0E77BD",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "40px",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  handleClick();
                }}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
