import React from 'react'
import '../styles.css'
import Keys from '../Components/Keys'
import Welcome from '../Components/Welcome'
import InsertCard from './InsertCard'
import Options from './Options'
import Denomination from './Denomination'
import InputField from './InputField'


const Homepage = () => {
  return (
    <>
        <div className='home'>

        <div id='output-screen'>
        {/* <Welcome/> */}
        {/* <InsertCard/> */}
        {/* <Options/> */}
        {/* <Denomination/> */}
        {/* <InputField message='Enter Amount'/> */}
        {/* <InputField message='Enter Pin'/> */}
        <InputField message='Enter OTP'/>
        </div>
        
        <div id='keypad'>

            <div>
              <div className='keypad-row'>
                <Keys num={'1'}/>
                <Keys num={'2'}/>
                <Keys num={'3'} marginright={'6%'}/>
                <Keys num={'CANCEL'} colour={'#D5193C'} size={'small'} width={'85px'} />
              </div>
              <div className='keypad-row'>
                <Keys num={'4'}/>
                <Keys num={'5'}/>
                <Keys num={'6'} marginright={'6%'}/>
                <Keys num={'CLEAR'} colour={'#FFE484'} size={'small'} width={'85px'}/>
              </div>
              <div className='keypad-row'>
                <Keys num={'7'}/>
                <Keys num={'8'}/>
                <Keys num={'9'} marginright={'6%'}/>
                <Keys num={'ENTER'} colour={'#008229'} size={'small'} width={'85px'}/>
              </div>
              <div className='keypad-row'>
                <Keys num={' '}/>
                <Keys num={'0'}/>
                <Keys num={'.'} marginright={'6%'}/>
                <Keys num={''} size={'small'} width={'85px'}/>
              </div>
            
            </div>
        </div>
        </div>

    </>
  )
}

export default Homepage