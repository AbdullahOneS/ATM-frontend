import React from 'react'
import '../styles.css'
import Keys from '../Components/Keys'
import Welcome from '../Components/Welcome'
import InsertCard from './InsertCard'

const Homepage = () => {
  return (
    <>
        <div className='home'>

        {/* <div id='output-screen'></div> */}
        {/* <Welcome/> */}
        <InsertCard/>
        <div id='keypad'>

            <div>
              <div className='keypad-row'>
                <Keys num={'1'}/>
                <Keys num={'2'}/>
                <Keys num={'3'} marginright={'6%'}/>
                <Keys num={'CANCEL'} colour={'#D5193C'} size={'small'} width={'75px'} />
              </div>
              <div className='keypad-row'>
                <Keys num={'4'}/>
                <Keys num={'5'}/>
                <Keys num={'6'} marginright={'6%'}/>
                <Keys num={'CLEAR'} colour={'#FFE484'} size={'small'} width={'75px'}/>
              </div>
              <div className='keypad-row'>
                <Keys num={'7'}/>
                <Keys num={'8'}/>
                <Keys num={'9'} marginright={'6%'}/>
                <Keys num={'ENTER'} colour={'#008229'} size={'small'} width={'75px'}/>
              </div>
              <div className='keypad-row'>
                <Keys num={' '}/>
                <Keys num={'0'}/>
                <Keys num={'.'} marginright={'6%'}/>
                <Keys num={''} size={'small'} width={'75px'}/>
              </div>
            
            </div>
        </div>
        </div>

    </>
  )
}

export default Homepage