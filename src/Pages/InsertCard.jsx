import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input } from "antd";
import Card from "../Components/Card";
import Options from "./Options";

import axios from "axios";
import Api from "../Api";

const InsertCard = ({
  title,
  handlePageChange,
  errormessage,
  cardNumber,
  cardVerify,
}) => {
  let limit;
  // let cardHolder = "";
  // console.log(handleChange)
  if (title === "Card number") {
    limit = 16;
  }
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // const [cardNo, setcardNo] = useState("");
  const [cardDetails, setcardDetails] = useState({
    cardNumber: { cardNumber },
    cardHolder: "",
    cardAccountType: "",
  });

  //to call verify API

  // const cardVerify = async () => {
  //   try {
  //     var result = await Api.post("card/verify", {
  //       card_no: cardNumber,
  //     });
  //     if (result.data.status == 200) {
  //       // console.log("helloo ++> ");
  //       // setCardNo(cardNo);
  //       // setCardHolder(result.data.data);
  //       // setcardDetails({
  //       //   cardNumber: { cardNumber },
  //       //   cardHolder: result.data.data.name,
  //       //   cardAccountType: result.data.data.type,
  //       // });

  //       handlePageChange("OptionsAT", {
  //         cardNumber: cardNumber,
  //         cardHolder: result.data.data.name,
  //         cardAccountType: result.data.data.type,
  //       });
  //     } else {
  //       handlePageChange("Error");
  //     }

  //     // console.log(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // cardVerify()

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  // const handleInput = (event) => {
  //   const { value } = event.target;

  //   // Filter out any non-numeric characters
  //   const numericValue = value.replace(/\D/g, "");
  //   setcardNo(numericValue);
  // };

  // const handleKeyPress = (event) => {
  //   const { key } = event;

  //   // Allow only valid number keys and special keys
  //   if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete") {
  //     event.preventDefault();
  //   }

  //   if (cardNo.length >= limit && key !== "Backspace" && key !== "Delete") {
  //     event.preventDefault();
  //   }
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#76C0DB",
        }}
      >
        {/* {message !== "" ? <div className="Error-box">{message}</div> : ""} */}
        {/* {message !== "" ? <div className="Error-box">{message}</div> : ""} */}
        {errormessage !== "" ? (
          <Alert message={errormessage} type="error" showIcon closable />
        ) : (
          ""
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "80%",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "5%",
              fontFamily: "Merriweather, serif",
              fontSize: "15pt",
            }}
          >
            Enter Card Number
          </h1>
          {/* {cardNo} */}
          <div className="card">
            <Card cardNo={cardNumber} cardHolder={cardDetails.cardHolder} />
          </div>
          <div
            style={{
              // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "50%",
              // backgroundColor: "whitesmoke",
              padding: "2%",
              marginTop: "3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form form={form} name="horizontal_login" onFinish={onFinish}>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      cardNumber.length < 16 ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                    onClick={cardVerify}
                  >
                    Proceed
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertCard;
