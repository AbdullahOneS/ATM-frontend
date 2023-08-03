import React, { Component } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReceiptTemplate from "./ReceiptTemplate";

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  render() {
    const {
      cardHolderName,
      Date,
      transactionID,
      CardNo,
      type,
      ReceiverAccountHolder,
      amount,
      status,
      balance,
      handlePageChange,
    } = this.props;
    return (
      <div
        style={{
          backgroundColor: "#76C0DB",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1%",
          }}
        >
          <div style={{ margin: "1%", padding: "5%" }}>
            <div
              id="divToPrint"
              style={{
                backgroundColor: "#f5f5f5",
                // width: "210mm",
                // minHeight: "297mm",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80mm",
                height: "120mm",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReceiptTemplate
cardHolderName={cardHolderName}
Date={Date}
transactionID={transactionID}
CardNo={CardNo}
type={type}
amount={amount}
status={status}
balance={balance}
ReceiverAccountHolder={ReceiverAccountHolder}
/>
            </div>
          </div>
          <div style={{ padding: "10%" }}>
            <button
              className="OptionButton"
              style={{ outline: "none", border: "none" }}
              onClick={this.printDocument}
            >
              Print
            </button>
            <button
              className="OptionButton"
              style={{ outline: "none", border: "none", marginTop: "10%" }}
              onClick={()=>handlePageChange("Welcome")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}
