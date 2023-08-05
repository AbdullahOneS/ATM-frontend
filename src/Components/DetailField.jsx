import React, { useState } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../styles.css";

const DetailField = ({ message, Amount, accountNo, transactionType }) => {
  // const [amount, setAmount] = useState("");
  let inputValue;
  if (message === "Enter Account Number" && transactionType !== "transfer") {
    inputValue = accountNo;
  } else {
    inputValue = Amount;
  }

  return (
    <>
      <div
        className="amount-input-container"
        style={{ backgroundColor: "white" }}
      >
        {inputValue}
      </div>
    </>
  );
};

export default DetailField;
