import React from 'react'
import DetailField from '../Components/DetailField'
import PasswordField from '../Components/PasswordField'


const InputField = ({message}) => {

    let input=''
    let buttonText=''
    let resendotpLink=''
    if(message==='Enter Amount'){
        input=<DetailField/>
        buttonText='Proceed'
    }else if(message==='Enter Pin'){
        input=<PasswordField message='pin'/>
        buttonText='Proceed'
    }
    else{
        input=<PasswordField message='otp'/>
        buttonText='Verify'
        resendotpLink=<div style={{textAlign:'center',width:'100%',textDecoration:'underline',color:'purple'}}><a>Resend OTP</a></div>
    }

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'#76C0DB'}}>

        <div style={{width:'50%',display:'block',height:'60%',padding:'5%'}}>
            <div style={{textAlign:'center',marginBottom:'8%',color:'white'}}>OTP sent successfully</div>
            <h2 style={{ width:'100%',height:'fit-content',textAlign:'center',color:'white'}}>{message}</h2>
            {input}
            {resendotpLink}
            <div style={{display:'flex',justifyContent:'space-evenly',margin:'6% 0%'}}>        
                <div style={{backgroundColor:'#0E77BD',width:'100px',display:'flex',justifyContent:'center',alignItems:'center',height:'40px',color:'white'}}>{buttonText}</div>
                <div style={{backgroundColor:'#0E77BD',width:'100px',display:'flex',justifyContent:'center',alignItems:'center',height:'40px',color:'white'}}>clear</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InputField