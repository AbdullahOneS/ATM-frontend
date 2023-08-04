import React, { useState, useEffect } from "react";
import Rupee100 from "../images/100-rupee.png";
import Rupee200 from "../images/200-rupee.png";
import Rupee500 from "../images/500-rupee.png";
import Rupee2000 from "../images/2000-rupee.png";
import { Button } from "antd";
import axios from "axios";
import Api from "../Api";

const Denomination = ({
  amount,
  page,
  handlePageChange,
  setDenominations,
  withdrawalAmt,
}) => {
  const [message, setMessage] = useState(
    "Error! Selected Denomination not available"
  );

  // var suggDenominations = {
  //   'n_100': 0, 'n_200': 0, 'n_500': 0, 'n_2000': 0
  // }

  const [suggDenominations, setsuggDenominations] = useState({
    n_100: 0,
    n_200: 0,
    n_500: 0,
    n_2000: 0,
  });

  const atm_denominations = { n_100: 0, n_200: 0, n_500: 0, n_2000: 0 };
  useEffect(() => {
    async function getDeno() {
      try {
        var result = await Api.post("withdrawal/denomination", {
          atm_id: 1,
        });

        atm_denominations.n_100 = result.data.data.n_100;
        atm_denominations.n_200 = result.data.data.n_200;
        atm_denominations.n_500 = result.data.data.n_500;
        atm_denominations.n_2000 = result.data.data.n_2000;
        denominationSugg(atm_denominations, withdrawalAmt);

        // console.log(atm_denominations);
      } catch (error) {
        console.log(error);
      }
    }

    getDeno();
  }, []);

  useEffect(() => {
    setDenominations(suggDenominations);
    // Calculate the total amount
    const totalAmount =
      suggDenominations.n_100 * 100 +
      suggDenominations.n_200 * 200 +
      suggDenominations.n_500 * 500 +
      suggDenominations.n_2000 * 2000;
    // Check if total amount exceeds the withdrawal amount
    if (totalAmount > withdrawalAmt) {
      setMessage("Total amount exceeds withdrawal limit.");
    } else {
      setMessage("");
    }
  }, [suggDenominations, setDenominations, withdrawalAmt]);

  const handleIncrement = (value) => {
    if (value === 100) {
      if (suggDenominations.n_100 + 1 <= Math.floor(withdrawalAmt / value)) {
        setsuggDenominations({
          ...suggDenominations,
          n_100: suggDenominations.n_100 + 1,
        });
      } else {
        setMessage(`Cannot add more ${value} notes.`);
      }
    } else if (value === 200) {
      if (suggDenominations.n_200 + 1 <= Math.floor(withdrawalAmt / value)) {
        setsuggDenominations({
          ...suggDenominations,
          n_200: suggDenominations.n_200 + 1,
        });
      } else {
        setMessage(`Cannot add more ${value} notes.`);
      }
    } else if (value === 500) {
      if (suggDenominations.n_500 + 1 <= Math.floor(withdrawalAmt / value)) {
        setsuggDenominations({
          ...suggDenominations,
          n_500: suggDenominations.n_500 + 1,
        });
      } else {
        setMessage(`Cannot add more ${value} notes.`);
      }
    } else if (value === 2000) {
      if (suggDenominations.n_2000 + 1 <= Math.floor(withdrawalAmt / value)) {
        setsuggDenominations({
          ...suggDenominations,
          n_2000: suggDenominations.n_2000 + 1,
        });
      } else {
        setMessage(`Cannot add more ${value} notes.`);
      }
    }
  };

  const handleDecrement = (value) => {
    if (value === 100) {
      if (suggDenominations.n_100 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_100: suggDenominations.n_100 - 1,
        });
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 200) {
      if (suggDenominations.n_200 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_200: suggDenominations.n_200 - 1,
        });
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 500) {
      if (suggDenominations.n_500 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_500: suggDenominations.n_500 - 1,
        });
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    } else if (value === 2000) {
      if (suggDenominations.n_2000 - 1 >= 0) {
        setsuggDenominations({
          ...suggDenominations,
          n_2000: suggDenominations.n_2000 - 1,
        });
      } else {
        setMessage(`Cannot subtract more ${value} notes.`);
      }
    }
  };

  const denominationSugg = (denominations, withdrawalAmt) => {
    var n_2000 = 0;
    var n_500 = 0;
    var n_200 = 0;
    var n_100 = 0;
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

    console.log(n_2000, n_500, n_200, n_100);
  };

  return (
    <>
      <div style={{ display: "block", margin: "0" }}>
        {message !== "" ? <div className="Error-box">{message}</div> : ""}
        <div
          style={{ textAlign: "right", marginRight: "5%", fontWeight: "bold" }}
        >
          Total Amount : {withdrawalAmt}
        </div>

        <div className="denominations">
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

        <div style={{ display: "flex", justifyContent: "right" }}>
          {message.length > 0 ? (
            ""
          ) : (
            <Button
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
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Denomination;
