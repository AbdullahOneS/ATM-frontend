import React, { useState } from "react";
import Rupee100 from "../images/100-rupee.png";
import Rupee200 from "../images/200-rupee.png";
import Rupee500 from "../images/500-rupee.png";
import Rupee2000 from "../images/2000-rupee.png";
import { Button } from "antd";

const Denomination = ({ amount }) => {
  const [message, setMessage] = useState(
    "Error! Selected Denomination not available"
  );
  const [notes, setNotes] = useState({
    100: 0,
    200: 0,
    500: 0,
    2000: 0,
  });

  //   let Total =notes[100] * 100 + notes[200] * 200 + notes[500] * 500 + notes[2000] * 2000;
  return (
    <>
      <div style={{ display: "block", margin: "0" }}>
        {message != "" ? <div className="Error-box">{message}</div> : ""}
        <div
          style={{ textAlign: "right", marginRight: "5%", fontWeight: "bold" }}
        >
          Total Amount : {amount}
        </div>

        <div className="denominations">
          <div className="note">
            <img src={Rupee100} className="notePic" />
            <div className="counter">
              <button>-</button>
              <div className="counter-area">{notes[100]}</div>
              <button>+</button>
            </div>
            <div className="Amount">{notes[100] * 100}</div>
          </div>
          <div className="note">
            <img src={Rupee200} className="notePic" />
            <div className="counter">
              <button>-</button>
              <div className="counter-area">{notes[200]}</div>
              <button>+</button>
            </div>
            <div className="Amount">{notes[200] * 200}</div>
          </div>
          <div className="note">
            <img src={Rupee500} className="notePic" />
            <div className="counter">
              <button>-</button>
              <div className="counter-area">{notes[500]}</div>
              <button>+</button>
            </div>
            <div className="Amount">{notes[500] * 500}</div>
          </div>
          <div className="note">
            <img src={Rupee2000} className="notePic" />
            <div className="counter">
              <button>-</button>
              <div className="counter-area">{notes[2000]}</div>
              <button>+</button>
            </div>
            <div className="Amount">{notes[2000] * 2000}</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div
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
          >
            Proceed
          </div>
        </div>
      </div>
    </>
  );
};

export default Denomination;
