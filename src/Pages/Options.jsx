import React from 'react'
import Card from '../Components/Card'
import Accounttype from '../Components/Accounttype'
import TransactionType from '../Components/TransactionType'
const Options = () => {
  return (
    <>
        <div style={{display:'flex',justifyContent:'space-betweens',alignItems:'center',width:'100%'}}>
            <div style={{margin:'2%',width:'50%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className='card' style={{width:'25vw'}}><Card/></div>
            </div>
            <div style={{width:'50%',margin:'auto'}}>
                {/* <Accounttype/> */}
                <TransactionType/>
            </div>
        </div>
    </>
  )
}

export default Options