import React from 'react'
import '../styles.css'
import CardBackground from '../images/Screenshot 2023-08-02 100754.png'

const Card = () => {
  return (
    <>
        <div className='wrapper' id='app'>
            <div className='card-form'>
                <div className='bank-name' >ABC Bank</div>
                <div className='card-items'>
                    <div className='card-no' >1234 4567 5678 1234</div>
                    <div className='card-holder-name'>Aayushi Paresh Amonkar</div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Card