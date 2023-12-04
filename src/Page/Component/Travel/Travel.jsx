import React from 'react'
import Data from './Datat'
import { Link } from 'react-router-dom'

function Travel() {
  return (
    <>
      <div className="main">
        <div className="head">Travel Packages</div>
        <div className="container">
          <div className="row">
            {Data.map((tra)=>
              <div className="col-4">
                <div className="card">
                  <Link to={`/travel/${tra.id}`}><img src={tra.image} alt="" height={220} width={350}/></Link>
                  <Link to={`/travel/${tra.id}`} className='nam'>{tra.name}</Link>
                </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Travel