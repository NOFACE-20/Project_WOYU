import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Datah'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Hoteldet() {
    let {hot_id}=useParams()
    let khai = Data.find((hya)=>hya.id==hot_id)
  return (
    <>
        <div className="vitra container-fluid">
            <div className='topnam'>{khai.name}</div>
            <span className='adph'><FontAwesomeIcon icon={faLocationDot} className='pe-1'/>{khai.address}<FontAwesomeIcon icon={faPhone} className='ps-4 pe-1'/>{khai.number}</span>
            <div className='phot'><img src={khai.image2} alt="" height={560} width={1000}/></div>
            <div className='blah'>{khai.description}</div>
        </div>
    </>
  )
}

export default Hoteldet