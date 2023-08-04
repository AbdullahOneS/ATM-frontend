import React from "react";
import Card from "../Components/Card";
import Accounttype from "../Components/Accounttype";
import TransactionType from "../Components/TransactionType";
import { Button } from "antd";
const Options = ({ Type ,handlePageChange,cardNo,cardHolder}) => {
  let type = "";
  if (Type === "Accounttype") {
    type = <div>
      <Button className='OptionButton' onClick={()=>{handlePageChange("OptionsTT")}}>
            Savings
        </Button>
        <Button className='OptionButton' onClick={()=>{handlePageChange("OptionsTT")}}>
            Current
        </Button>
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
            <Card cardNo={cardNo} cardHolder={cardHolder} />
          </div>
        </div>
        <div style={{ width: "50%", margin: "auto" }}>{type}</div>
      </div>
    </>
  );
};

export default Options;
