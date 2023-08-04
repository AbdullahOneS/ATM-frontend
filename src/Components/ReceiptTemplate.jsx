import React from "react";

const ReceiptTemplate = ({
  cardHolderName,

  Date,

  transactionID,

  CardNo,

  type,

  ReceiverAccountHolder,

  amount,

  status,

  balance,
}) => {
  return (
    <>
      <div
        style={{
          height: "90%",

          width: "90%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          ...............................................................................
        </div>

        <h4 style={{ textAlign: "center" }}>ATM TRANSACTION</h4>

        <div style={{ display: "flex", alignItems: "center" }}>
          ...............................................................................
        </div>

        <div
          style={{
            display: "flex",

            justifyContent: "space-between",

            marginTop: "5%",
          }}
        >
          <span style={{ textAlign: "left" }}>{cardHolderName}</span>
        </div>

        <div
          style={{
            display: "flex",

            justifyContent: "space-between",

            marginTop: "6%",
          }}
        >
          <span style={{ textAlign: "left" }}>Date : </span>

          <span style={{ textAlign: "right" }}>{Date}</span>
        </div>

        {type === "inquiry" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textAlign: "left" }}></span>

            <span style={{ textAlign: "right" }}></span>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textAlign: "left" }}>Transaction : </span>

            <span style={{ textAlign: "right" }}>{transactionID}</span>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ textAlign: "left" }}>Card : </span>

          <span style={{ textAlign: "right" }}>{CardNo}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* accounttype amount */}

          <span style={{ textAlign: "left" }}>{type}</span>

          {type != "inquiry" ? `${amount}` : ""}
        </div>

        {type === "Fund Transfer" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textAlign: "left" }}>Transferred to: </span>

            <span style={{ textAlign: "right" }}>{ReceiverAccountHolder}</span>
          </div>
        ) : (
          ""
        )}

        <div
          style={{
            display: "flex",

            justifyContent: "space-between",

            marginTop: "8%",
          }}
        >
          <span style={{ textAlign: "left" }}>Transaction {status}</span>
        </div>

        <div
          style={{
            display: "flex",

            justifyContent: "space-between",

            marginTop: "7%",
          }}
        >
          <span style={{ textAlign: "left" }}>Account Balance</span>

          <span style={{ textAlign: "right" }}>{balance}</span>
        </div>

        <div
          style={{
            backgroundColor: "black",

            color: "white",

            width: "302px",

            position: "relative",

            left: "-15px",

            bottom: "-106.5px",

            height: "40px",

            textAlign: "center",

            paddingTop: "3.5%",
          }}
        >
          @ABC Bank
        </div>
      </div>
    </>
  );
};

export default ReceiptTemplate;
