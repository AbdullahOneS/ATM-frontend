import React, { useState, useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Card from "../Components/Card";
import Options from "./Options";

import axios from "axios";
import Api from "../Api";

const InsertCard = ({ title,handlePageChange,setCardNo,setCardHolder ,cardHolder}) => {
  let limit;
  // let cardHolder = "";
  // console.log(handleChange)
  if (title === "Card number") {
    limit = 16;
  }
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [cardNo, setcardNo] = useState("");

  //to call verify API

  const cardVerify = async()=>{
    try {
      var result =  await Api.post("card/verify",{
        card_no:cardNo
      }
      );
      if(result.data.status == 200){
        console.log("helloo ++> ");
        setCardNo(cardNo)
        setCardHolder(result.data.data)
        handlePageChange("OptionsAT")
      }
      else{
        handlePageChange('Error')
      }
      
      // console.log(result.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  // cardVerify()



  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  const handleInput = (event) => {
    const { value } = event.target;

    // Filter out any non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    setcardNo(numericValue);
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    // Allow only valid number keys and special keys
    if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete") {
      event.preventDefault();
    }

    if (cardNo.length >= limit && key !== "Backspace" && key !== "Delete") {
      event.preventDefault();
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor:"#76C0DB"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "80%",
          }}
        >
          {/* {cardNo} */}
          <div className="card">
            <Card cardNo={cardNo} cardHolder={cardHolder} />
          </div>
          <div
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "50%",
              backgroundColor: "whitesmoke",
              padding: "2%",
              marginTop: "3%",
            }}
          >
            <Form form={form} name="horizontal_login" onFinish={onFinish}>
              <Form.Item
                name="CardNumber"
                rules={[
                  {
                    required: true,
                    message: `Please input your ${title} !`,
                  },
                ]}
              >
                <Input
                  type="text"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={title}
                  value={cardNo}
                  onChange={handleInput}
                  onKeyPress={handleKeyPress}
                />
              </Form.Item>
              {/* <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item> */}
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true)|| form.value < 16 ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                    onClick={()=>{
                      cardVerify()
                    }}
                  >
                    Log in
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
