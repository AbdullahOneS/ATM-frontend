import React from 'react'

const Accounttype = ({handlePageChange}) => {
  return (
    <>
        <div className='OptionButton' onClick={()=>handlePageChange("OptionsTT")}>
            Savings
        </div>
        <div className='OptionButton' onClick={()=>handlePageChange("OptionsTT")}>
            Current
        </div>
    </>
  )
}

export default Accounttype