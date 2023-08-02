import React from 'react'
import '../styles.css'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import atm from '../images/atmImageForWelcomepage.png'
const Welcome = () => {
  return (
    <>

    {/* <div className='output-screen'> */}
        <div className='welcome' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src={atm} alt="" width="100%"/>
          {/* <img src='src\images\atmImageForWelcomepage.png' alt="" srcset=""  width='100%' height='100%'/> */}
        </div>
        <div style={{padding:"10%"}}>

        <h1>Welcome To</h1>
        <h2>ABC Bank</h2>
        <Button type="primary" icon={<DownloadOutlined />} size='large' style={{position:"absolute",top:"50%",left:"45%",width:"20%"}}>
            Insert Card
          </Button>
        </div>
    {/* // </div> */}
    </>
  )
}

export default Welcome
