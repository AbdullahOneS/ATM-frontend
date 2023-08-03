import React, { useState } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../styles.css";

const PasswordField = ({ message }) => {
  let limit;
  if (message === "pin") {
    limit = 4;
  } else {
    limit = 6;
  }
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    const { value } = event.target;

    // Filter out any non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Restrict the input to only four characters
    if (numericValue.length <= limit) {
      setInputValue(numericValue);
    }
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    // Allow only valid number keys and special keys
    if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete") {
      event.preventDefault();
    }
    // Prevent input after four characters
    if (inputValue.length >= limit && key !== "Backspace" && key !== "Delete") {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="amount-input-container"></div>
      {/* {amount} */}
      <Form.Item
        name="Enter Pin"
        rules={[
          {
            required: true,
            message: "Please Enter Pin!",
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Enter Pin"
          onKeyPress={handleKeyPress}
          value={inputValue}
          onChange={handleInput}
          className="amount-input"
        />
      </Form.Item>
      <div />
    </>
  );
};

export default PasswordField;
