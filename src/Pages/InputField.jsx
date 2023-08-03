import React from "react";
import DetailField from "../Components/DetailField";
import PasswordField from "../Components/PasswordField";

const InputField = ({ message, Transactiontype,handlePageChange }) => {
  let page = "";
  let input = "";
  let buttonText = "";
  let resendotpLink = "";
  let otpmessage = "";
  let AccountHolderName = "";
  let transferBlock = "";
  if (Transactiontype === "transfer") {
    AccountHolderName = "Aayushi Amonkar";
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
        Transferring to {AccountHolderName}
      </div>
    );
  }
  if (message === "Enter Amount") {
    input = <DetailField message={message} />;
    page = "InputFieldEnterPin";
    buttonText = "Proceed";
  } else if (message === "Enter Pin") {
    input = <PasswordField message="pin"/>;
    page = "ReceiptW";
    buttonText = "Proceed";
  } else if (message === "Enter Account Number") {
    input = <DetailField message={message}/>;
    page = "InputFieldEnterAmount"
    buttonText = "Proceed";
  } else {
    input = <PasswordField message="otp"/>;
    page = "ReceiptW"
    buttonText = "Verify";
    resendotpLink = (
      <div
        style={{
          textAlign: "center",
          width: "100%",
          textDecoration: "underline",
          color: "purple",
        }}
      >
        <a>Resend OTP</a>
      </div>
    );
    otpmessage = (
      <div style={{ textAlign: "center", marginBottom: "8%", color: "white" }}>
        OTP sent successfully
      </div>
    );
  }

  return (
    <>
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
              <div
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
                onClick={()=>handlePageChange(page)}
              >
                {buttonText}
              </div>
              <div
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
              >
                clear
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
