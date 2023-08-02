import React from 'react'


const Keys = ({num,colour,size,width,marginright}) => {
  return (
    <div className='key' style={{backgroundColor:colour,fontSize:size,width:width,marginRight:marginright}}>{num}</div>
  )
}

export default Keys