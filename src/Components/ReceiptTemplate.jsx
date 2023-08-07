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
          height: "100%",
          padding: "10%",
          width: "100%",
          position: "relative",
        }}
      >
        {/* {type} */}
        <div style={{ textAlign: "center" }}>
          <p>
            .....................................................................
          </p>
          <h4>ATM TRANSACTION</h4>
          <p>
            .....................................................................
          </p>
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

        {type === "inquiry" || transactionID === "" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textAlign: "left" }}></span>

            <span style={{ textAlign: "right" }}></span>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ textAlign: "left" }}>Transaction ID: </span>

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

        {type === "fund Transfer" ? (
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

        {balance === "" ? (
          ""
        ) : (
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
        )}

        <div
          style={{
            backgroundColor: "black",
            color: "white",
            width: "302px",
            position: "absolute",
            left: "0",
            bottom: "0",
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
