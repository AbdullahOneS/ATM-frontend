import React from 'react'
import '../styles.css'
import CardBackground from '../images/Screenshot 2023-08-02 100754.png'

const Card = ({cardNo,cardHolder}) => {
   let cardno=`${cardNo}`
  const formattedNumber = cardno.replace(/(\d{4})(?=\d)/g, '$1-');
  return (
    <>
        <div className='wrapper' id='app'>
            <div className='card-form'>
                <div className='bank-name' >ABC Bank</div>
                <div className='card-items'>
                    <div className='card-no' >{formattedNumber}</div>
                    <div className='card-holder-name'>{cardHolder}</div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Card