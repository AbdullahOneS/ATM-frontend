import { Button } from 'antd'
import React from 'react'

const TransactionType = ({handlePageChange}) => {
  return (
    <>
        <Button className='OptionButton' onClick={()=>handlePageChange("InputFieldEnterAmount")}>Withdrawal</Button>
        <Button className='OptionButton'onClick={()=>handlePageChange("Denominationd")}>Deposit</Button>
        <Button className='OptionButton'onClick={()=>handlePageChange("InputFieldEnterPin")}>Balance Inquiry</Button>
        <Button className='OptionButton'onClick={()=>handlePageChange("InputFieldEnterAccNo")}>Fund Transfer</Button>
    </>
  )
}

export default TransactionType