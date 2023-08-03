import React from "react";
import Card from "../Components/Card";
import Accounttype from "../Components/Accounttype";
import TransactionType from "../Components/TransactionType";
const Options = ({ Type ,handlePageChange}) => {
  let type = "";
  if (Type === "Accounttype") {
    type = <div>
      <div className='OptionButton' onClick={()=>handlePageChange("OptionsTT")}>
            Savings
        </div>
        <div className='OptionButton' onClick={()=>handlePageChange("OptionsTT")}>
            Current
        </div>
    </div>;
  } else {
    type = <TransactionType handlePageChange={handlePageChange}/>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-betweens",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#76C0DB",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            margin: "2%",
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="card" style={{ width: "25vw" }}>
            <Card cardNo={"1233123413445135"} cardHolder={"Aayushi Amonkar"} />
          </div>
        </div>
        <div style={{ width: "50%", margin: "auto" }}>{type}</div>
      </div>
    </>
  );
};

export default Options;
