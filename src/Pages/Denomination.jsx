import React, { useState, useEffect } from "react";
import Rupee100 from "../images/100-rupee.png";
import Rupee200 from "../images/200-rupee.png";
import Rupee500 from "../images/500-rupee.png";
import Rupee2000 from "../images/2000-rupee.png";
import { Alert, Button, Form } from "antd";
import axios from "axios";
import Api from "../Api";

const Denomination = ({
  amount,
  page,
  handlePageChange,
  setDenominations,
  withdrawalAmt,
  atmDenominations,
  setWithdrawDenominations,
}) => {
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [remainingAmt, setremainingAmt] = useState(0);

  const [suggDenominations, setsuggDenominations] = useState({
    n_100: 0,
    n_200: 0,
    n_500: 0,
    n_2000: 0,
  });
  let totalAmount =
    suggDenominations.n_100 * 100 +
    suggDenominations.n_200 * 200 +
    suggDenominations.n_500 * 500 +
    suggDenominations.n_2000 * 2000;

  useEffect(() => {
    console.log("heee");
    console.log(atmDenominations);
    // getDeno();

    denominationSugg(atmDenominations, withdrawalAmt);
  }, []);

  const handleIncrement = (value) => {
    let totalAmount =
      suggDenominations.n_100 * 100 +
      suggDenominations.n_200 * 200 +
      suggDenominations.n_500 * 500 +
      suggDenominations.n_2000 * 2000;
    if (value === 100) {
      //atm has no more 100 notes cant increment
      if (suggDenominations.n_100 <= atmDenominations.n_100) {
        //withdrawal amt is less
        if (suggDenominations.n_100 + 1 <= Math.floor(withdrawalAmt / value)) {
          if (100 + totalAmount > parseInt(withdrawalAmt)) {
            setMessage("Withdrawal amount limit exceed");
          } else {
            setMessage("");
            setremainingAmt((prev) => prev - 100);
            setsuggDenominations({
              ...suggDenominations,
              n_100: suggDenominations.n_100 + 1,
            });
          }
        } else {
          setMessage(`Cannot add more ${value} notes.`);
        }
      } else {
        setMessage(`No cash to dispense.`);
      }
    } else if (value === 200) {
      if (suggDenominations.n_200 <= atmDenominations.n_200) {
        if (suggDenominations.n_200 + 1 <= Math.floor(withdrawalAmt / value)) {
          if (200 + totalAmount > parseInt(withdrawalAmt)) {
            setMessage("Withdrawal amount limit exceed");
          } else {
            setMessage("");
            setsuggDenominations({
              ...suggDenominations,
              n_200: suggDenominations.n_200 + 1,
            });
            setremainingAmt((prev) => prev - 200);
          }
        } else {
          setMessage(`Cannot add more ${value} notes.`);
        }
      } else {
        setMessage(`No cash to dispense.`);
      }
    } else if (value === 500) {
      if (suggDenominations.n_500 <= atmDenominations.n_500) {
        if (suggDenominations.n_500 + 1 <= Math.floor(withdrawalAmt / value)) {
          if (500 + totalAmount > parseInt(withdrawalAmt)) {
            setMessage("Withdrawal amount limit exceed");
          } else {
            setMessage("");
            setsuggDenominations({
              ...suggDenominations,
              n_500: suggDenominations.n_500 + 1,
            });
            setremainingAmt((prev) => prev - 500);
          }
        } else {
          setMessage(`Cannot add more ${value} notes.`);
        }
      } else {
        setMessage(`No cash to dispense.`);
      }
    } else if (value === 2000) {
      if (suggDenominations.n_2000 <= atmDenominations.n_2000) {
        if (suggDenominations.n_2000 + 1 <= Math.floor(withdrawalAmt / value)) {
          if (2000 + totalAmount > parseInt(withdrawalAmt)) {
            setMessage("Withdrawal amount limit exceed");
          } else {
            setMessage("");
            setsuggDenominations({
              ...suggDenominations,
              n_2000: suggDenominations.n_2000 + 1,
            });
            setremainingAmt((prev) => prev - 2000);
          }
        } else {
          setMessage(`Cannot add more ${value} notes.`);
        }
      } else {
        setMessage(`No cash to dispense.`);
      }
    }
  };

  const handleDecrement = (value) => {
    let totalAmount =
      suggDenominations.n_100 * 100 +
      suggDenominations.n_200 * 200 +
      suggDenominations.n_500 * 500 +
      suggDenominations.n_2000 * 2000;
    if (value === 100) {
      //cant have -ve  no of notes
      if (suggDenominations.n_100 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_100: suggDenominations.n_100 - 1,
        });
        setMessage("");

        setremainingAmt((prev) => prev + 100);
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 200) {
      if (suggDenominations.n_200 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_200: suggDenominations.n_200 - 1,
        });
        setMessage("");
        setremainingAmt((prev) => prev + 200);
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 500) {
      if (suggDenominations.n_500 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_500: suggDenominations.n_500 - 1,
        });
        setMessage("");
        setremainingAmt((prev) => prev + 500);
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 2000) {
      if (suggDenominations.n_2000 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_2000: suggDenominations.n_2000 - 1,
        });
        setMessage("");
        setremainingAmt((prev) => prev + 2000);
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    }
  };

  const denominationSugg = (denominations, withdrawalAmt) => {
    let n_2000 = 0;
    let n_500 = 0;
    let n_200 = 0;
    let n_100 = 0;

    if (withdrawalAmt >= 2000 && denominations.n_2000 > 0) {
      n_2000 = Math.floor(withdrawalAmt / 2000);
      if (denominations.n_2000 < n_2000) {
        n_2000 = denominations.n_2000;
      }
      withdrawalAmt -= 2000 * n_2000;
    }
    if (withdrawalAmt >= 500 && denominations.n_500 > 0) {
      n_500 = Math.floor(withdrawalAmt / 500);
      if (denominations.n_500 < n_500) {
        n_500 = denominations.n_500;
      }
      withdrawalAmt -= 500 * n_500;
    }
    if (withdrawalAmt >= 200 && denominations.n_200 > 0) {
      n_200 = Math.floor(withdrawalAmt / 200);
      if (denominations.n_200 < n_200) {
        n_200 = denominations.n_200;
      }
      withdrawalAmt -= 200 * n_200;
    }
    if (withdrawalAmt >= 100 && denominations.n_100 > 0) {
      n_100 = Math.floor(withdrawalAmt / 100);
      if (denominations.n_100 < n_100) {
        n_100 = denominations.n_100;
      }
      withdrawalAmt -= 100 * n_100;
    }
    setsuggDenominations({
      n_100: n_100,
      n_200: n_200,
      n_500: n_500,
      n_2000: n_2000,
    });
  };

  // console.log(suggDenominations);

  return (
    <>
      <div style={{ display: "block", margin: "10px" }}>
        {/* {message !== "" ? <div className="Error-box">{message}</div> : ""} */}
        {message !== "" ? (
          <Alert message={message} type="error" showIcon />
        ) : (
          ""
        )}

        <div
          style={{
            textAlign: "right",
            marginRight: "5%",
            marginTop: "2%",
            fontWeight: "bold",
          }}
        >
          Total Amount : {withdrawalAmt}
        </div>

        {/* {eval(withdrawalAmt)} */}
        <div className="denominations">
          {/* {withdrawalAmt} */}
          <div className="note">
            <img src={Rupee100} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(100)}>-</button>
              <div className="counter-area">{suggDenominations.n_100}</div>
              <button onClick={() => handleIncrement(100)}>+</button>
            </div>
            <div className="Amount">{suggDenominations.n_100 * 100}</div>
          </div>
          <div className="note">
            <img src={Rupee200} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(200)}>-</button>
              <div className="counter-area">{suggDenominations.n_200}</div>
              <button onClick={() => handleIncrement(200)}>+</button>
            </div>
            <div className="Amount">{suggDenominations.n_200 * 200}</div>
          </div>
          <div className="note">
            <img src={Rupee500} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(500)}>-</button>
              <div className="counter-area">{suggDenominations.n_500}</div>
              <button onClick={() => handleIncrement(500)}>+</button>
            </div>
            <div className="Amount">{suggDenominations.n_500 * 500}</div>
          </div>
          <div className="note">
            <img src={Rupee2000} className="notePic" />
            <div className="counter">
              <button onClick={() => handleDecrement(2000)}>-</button>
              <div className="counter-area">{suggDenominations.n_2000}</div>
              <button onClick={() => handleIncrement(2000)}>+</button>
            </div>
            <div className="Amount">{suggDenominations.n_2000 * 2000}</div>
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
        >
          {remainingAmt === 0 ? "" : `Add ${remainingAmt} to Proceed`}
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          {/* <Button
            style={{
              backgroundColor: "#0E77BD",
              width: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40px",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={() => handlePageChange("InputFieldEnterPin")}
          >
            Proceed
          </Button> */}

          <Form form={form} name="horizontal_login">
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    suggDenominations.n_100 * 100 +
                      suggDenominations.n_200 * 200 +
                      suggDenominations.n_500 * 500 +
                      suggDenominations.n_2000 * 2000 !==
                    parseInt(withdrawalAmt)
                      ? true
                      : false
                  }
                  onClick={() => {
                    setDenominations(suggDenominations);
                    handlePageChange("InputFieldEnterPin");
                  }}
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

export default Denomination;
