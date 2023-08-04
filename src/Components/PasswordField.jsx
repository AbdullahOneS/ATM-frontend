import React, { useState } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "../styles.css";

const PasswordField = ({ message, setInputValue }) => {
  let limit;
  if (message === "pin") {
    limit = 4;
  } else {
    limit = 6;
  }
  const [Value, setValue] = useState("");
  const handleInput = (event) => {
    const { value } = event.target;

    // Filter out any non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Restrict the input to only four characters
    if (numericValue.length <= limit) {
      setValue(numericValue);
      setInputValue(numericValue);
    }
  };

  // const handleKeyPress = (event) => {
  //   const { key } = event;

  //   // Allow only valid number keys and special keys
  //   if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete") {
  //     event.preventDefault();
  //   }
  //   // Prevent input after four characters
  //   if (Value.length >= limit && key !== "Backspace" && key !== "Delete") {
  //     event.preventDefault();
  //   }
  // };
  return (
    <>
      <div className="amount-input-container"></div>
      {/* {amount} */}
      {/* {Value} */}
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
          // onKeyPress={handleKeyPress}
          value={Value}
          onChange={handleInput}
          className="amount-input"
          suffix={(onclick = () => {})}
        />
      </Form.Item>
      <div />
    </>
  );
};

export default PasswordField;
