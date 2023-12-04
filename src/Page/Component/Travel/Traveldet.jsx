import React from 'react'
import Data from './Datat'
import { useParams } from 'react-router-dom'

function Traveldet() {
    let {tra_id}=useParams()
    let ktha = Data.find((e)=>e.id==tra_id)
  return (
    <>
        <div className="tour container-fluid">
            <div className="heading">{ktha.name}</div>
            <div className='phot'><img src={ktha.image} alt="" height={560} width={1000}/></div>
            <div className='blah '>{ktha.description}</div>
        </div>
    </>
  )
}

export default Traveldet