import React from "react";

const ReceiptTemplate = () => {
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
          <span style={{ textAlign: "left" }}>Aayushi Amonkar</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6%",
          }}
        >
          <span style={{ textAlign: "left" }}>Date : </span>
          <span style={{ textAlign: "right" }}>02/08/202311:10</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ textAlign: "left" }}>Transaction : </span>
          <span style={{ textAlign: "right" }}>123</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ textAlign: "left" }}>Card : </span>
          <span style={{ textAlign: "right" }}>XXXX XXXX XXXX 0087</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* accounttype amount */}
          <span style={{ textAlign: "left" }}>Withdrawal</span>
          <span style={{ textAlign: "right" }}>100.00</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8%",
          }}
        >
          <span style={{ textAlign: "left" }}>Transaction failed</span>
          <span style={{ textAlign: "right" }}></span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "7%",
          }}
        >
          <span style={{ textAlign: "left" }}>Account Balance</span>
          <span style={{ textAlign: "right" }}>5000.00</span>
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
