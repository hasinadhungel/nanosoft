import React from 'react'
import serviceData from './serviceData'
import './service.css'


const Service = () => {
  return (
    <div>
        {
            serviceData.map((data,index)=>{
                return(
                    <div className='service-container'>
                    <p>{data.heading}</p>
                    <p>{data.text}</p>
                    <p>{data.nextText}</p>
                    </div>
                )
            })

        }
    </div>
  )
}

export default Service