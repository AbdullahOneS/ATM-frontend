import React, { useState } from 'react'
import {Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../styles.css'


const DetailField = ({message,setWithdrawalAmt}) => {
    const [amount,setAmount]=useState('')
    const amountRegex=/^\d[^0-9]?$/;

    // const handleInput=(event)=>{
    //     let {value}=event.target;

    //     if(amountRegex.test(value)|| value===''){
    //         setAmount(value)
    //     }
        
    // }

    // const handleKeyPress = (event) => {
    //     const { key } = event;
    
    //     // Allow backspace and delete keys
    //     if (key === 'Backspace' || key === 'Delete') {
    //       return;
    //     }
    
    //     // Allow only valid numeric and decimal characters
    //     if (!/[\d]/.test(key)) {
    //       event.preventDefault();
    //     }
    
    //     // Prevent multiple decimal points
    //     if (key === '.' && amount.includes('.')) {
    //       event.preventDefault();
    //     }
    //     // Prevent entering digits after two decimal places
    //     if (amount.includes('.') && amount.split('.')[1].length >= 2) {
    //         event.preventDefault();
    //     }
    //   };

    const handleInput = (event) => {
        const { value } = event.target;
    
        // Filter out any non-numeric characters
        const numericValue = value.replace(/\D/g, '');
    
        setAmount(numericValue);
      };

      setWithdrawalAmt(amount);
    
      const handleKeyPress = (event) => {
        const { key } = event;
    
        // Allow only valid number keys and special keys
        if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {
          event.preventDefault();
        }

        if(message==='Enter Account Number'){
          if (amount.length >= 11 && key !== 'Backspace' && key !== 'Delete') {
            event.preventDefault();
          }
        }

      };

  return (
    <>
    <div className="amount-input-container"></div>
    {/* {amount} */}
        <Form.Item
        name="Enter Amount"
        rules={[
          {
            required: true,
            message: `Please ${message}!`,
          },
        ]}
      >
        <Input type='text' placeholder={message} onKeyPress={handleKeyPress} value={amount} onChange={handleInput} className="amount-input"/>
      </Form.Item>
      <div/>
    </>
  )
}

export default DetailField