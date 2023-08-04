import React from "react";

import Keys from "./Keys";

import "../styles.css";

const Keyboard = ({ onKeyClick }) => {
  return (
    <>
      <div id="keypad">
        <div>
          <div className="keypad-row">
            <button className="btn" onClick={() => onKeyClick("1")}>
              <Keys num={"1"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("2")}>
              <Keys num={"2"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("3")}>
              <Keys num={"3"} marginright={"6%"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("CANCEL")}>
              <Keys
                num={"CANCEL"}
                colour={"#D5193C"}
                size={"small"}
                width={"85px"}
              />
            </button>
          </div>

          <div className="keypad-row">
            <button className="btn" onClick={() => onKeyClick("4")}>
              <Keys num={"4"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("5")}>
              <Keys num={"5"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("6")}>
              <Keys num={"6"} marginright={"6%"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("DELETE")}>
              <Keys
                num={"DELETE"}
                colour={"#FFE484"}
                size={"small"}
                width={"85px"}
              />
            </button>
          </div>

          <div className="keypad-row">
            <button className="btn" onClick={() => onKeyClick("7")}>
              <Keys num={"7"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("8")}>
              <Keys num={"8"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("9")}>
              <Keys num={"9"} marginright={"6%"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("ENTER")}>
              <Keys
                num={"ENTER"}
                colour={"#008229"}
                size={"small"}
                width={"85px"}
              />
            </button>
          </div>

          <div className="keypad-row">
            <button className="btn">
              <Keys num={" "} />
            </button>

            <button className="btn" onClick={() => onKeyClick("0")}>
              <Keys num={"0"} />
            </button>

            <button className="btn">
              <Keys num={"."} marginright={"6%"} />
            </button>

            <button className="btn" onClick={() => onKeyClick("CLEAR")}>
              <Keys
                num={"CLEAR"}
                size={"small"}
                width={"85px"}
                colour={"yellow"}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
