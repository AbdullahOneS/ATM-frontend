import React from 'react'

const TransactionType = ({handlePageChange}) => {
  return (
    <>
        <div className='OptionButton' onClick={()=>handlePageChange("Denominationw")}>Withdrawal</div>
        <div className='OptionButton'onClick={()=>handlePageChange("Denominationd")}>Deposit</div>
        <div className='OptionButton'onClick={()=>handlePageChange("InputFieldEnterPin")}>Balance Inquiry</div>
        <div className='OptionButton'onClick={()=>handlePageChange("InputFieldEnterAccNo")}>Fund Transfer</div>
    </>
  )
}

export default TransactionType