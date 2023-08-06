import React, { useState } from "react";
import Rupee100 from "../images/100-rupee.png";
import Rupee200 from "../images/200-rupee.png";
import Rupee500 from "../images/500-rupee.png";
import Rupee2000 from "../images/2000-rupee.png";
import { Button, Form } from "antd";

const Denominationdepo = ({
  DepositAmount,
  setDepositAmount,
  depoDenominations,
  setDepoDenominations,
  handlePageChange,
}) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const [message, setMessage] = useState("");

  const handleIncrement = (value) => {
    if (value === 100) {
      setDepoDenominations({
        ...depoDenominations,
        n_100: depoDenominations.n_100 + 1,
      });
      setDepositAmount((pre) => pre + 100);
    }
    if (value === 200) {
      setDepoDenominations({
        ...depoDenominations,
        n_200: depoDenominations.n_200 + 1,
      });
      setDepositAmount((pre) => pre + 200);
    }
    if (value === 500) {
      setDepoDenominations({
        ...depoDenominations,
        n_500: depoDenominations.n_500 + 1,
      });
      setDepositAmount((pre) => pre + 500);
    }
    if (value === 2000) {
      setDepoDenominations({
        ...depoDenominations,
        n_2000: depoDenominations.n_2000 + 1,
      });
      setDepositAmount((pre) => pre + 2000);
    }
  };

  const handleDecrement = (value) => {
    if (value === 100) {
      setDepoDenominations({
        ...depoDenominations,
        n_100: depoDenominations.n_100 - 1,
      });
      setDepositAmount((pre) => pre - 100);
    }
    if (value === 200) {
      setDepoDenominations({
        ...depoDenominations,
        n_200: depoDenominations.n_200 - 1,
      });
      setDepositAmount((pre) => pre - 200);
    }
    if (value === 500) {
      setDepoDenominations({
        ...depoDenominations,
        n_500: depoDenominations.n_500 - 1,
      });
      setDepositAmount((pre) => pre - 500);
    }
    if (value === 2000) {
      setDepoDenominations({
        ...depoDenominations,
        n_2000: depoDenominations.n_2000 - 1,
      });
      setDepositAmount((pre) => pre - 2000);
    }
  };

  return (
    <>
      <div style={{ display: "block", margin: "0" }}>
        {message !== "" ? <div className="Error-box">{message}</div> : ""}
        <div
          style={{ textAlign: "right", marginRight: "5%", fontWeight: "bold" }}
        >
          Total Amount : {DepositAmount}
        </div>

        {/* {eval(withdrawalAmt)} */}
        <div className="denominations">
          {/* {withdrawalAmt} */}
          <div className="note">
            <img src={Rupee100} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(100)}>-</button>
              <div className="counter-area">{depoDenominations.n_100}</div>
              <button onClick={() => handleIncrement(100)}>+</button>
            </div>
            <div className="Amount">{depoDenominations.n_100 * 100}</div>
          </div>
          <div className="note">
            <img src={Rupee200} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(200)}>-</button>
              <div className="counter-area">{depoDenominations.n_200}</div>
              <button onClick={() => handleIncrement(200)}>+</button>
            </div>
            <div className="Amount">{depoDenominations.n_200 * 200}</div>
          </div>
          <div className="note">
            <img src={Rupee500} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(500)}>-</button>
              <div className="counter-area">{depoDenominations.n_500}</div>
              <button onClick={() => handleIncrement(500)}>+</button>
            </div>
            <div className="Amount">{depoDenominations.n_500 * 500}</div>
          </div>
          <div className="note">
            <img src={Rupee2000} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(2000)}>-</button>
              <div className="counter-area">{depoDenominations.n_2000}</div>
              <button onClick={() => handleIncrement(2000)}>+</button>
            </div>
            <div className="Amount">{depoDenominations.n_2000 * 2000}</div>
          </div>
        </div>
        <div
          style={{
            // border: "1px solid red",
            textAlign: "right",
            color: "purple",
            fontWeight: "300",
            fontSize: "12pt",
            textDecoration: "underline",
            marginBottom: "1%",
          }}
        ></div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Form form={form} name="horizontal_login">
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={DepositAmount === 0 ? true : false}
                  onClick={() => handlePageChange("InputFieldEnterPin")}
                >
                  Proceed
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Denominationdepo;
