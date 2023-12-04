import React from 'react'
import Data from './Datah'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Hotel() {
  return (
    <>
      <div className="hotelall">
        <div className="hotel">Hotels</div>
        <div className="container">
          <div className="row">
            {Data.map((hot)=>
              <div className="col-4">
                <div className="card">
                  <Link to={`/hotel/${hot.id}`}><img src={hot.image} alt="" height={220} width={350}/></Link>
                  <Link to={`/hotel/${hot.id}`} className='nam'>{hot.name}</Link>
                  <div className="card-add"><FontAwesomeIcon icon={faLocationDot}/> {hot.address}</div>
                  <div className="card-star"><FontAwesomeIcon icon={faStar} className='me-1'/><FontAwesomeIcon icon={faStar} className='me-1'/><FontAwesomeIcon icon={faStar} className='me-1'/><FontAwesomeIcon icon={faStar} className='me-1'/></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hotel