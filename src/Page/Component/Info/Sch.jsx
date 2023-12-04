import { faArrowRightArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Sch() {
  return (
    <>
      <div className="sch">
      <div className="fsch container">Flight Schedule</div>
    <div className="drop">
            <div>
                <span className="dropdown ms-5 me-5"> 
                    <button className="btn btn-dark dropdown-toggle px-5 ms-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Origin</span>
                    </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">KATHMANDU (KTM)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">LUKLA (LUA)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">JOMSOM (JOM)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">POKHARA (PKR)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">BIRATNAGAR (BIR)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">PHAPLU (PPL) </a></li>
                    </ul>
                </span>
                <span className="arrow me-5"><FontAwesomeIcon icon={faArrowRightArrowLeft} /></span>
                <span className="dropdown">
                    <button className="btn btn-dark dropdown-toggle px-5 me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Destination</span>
                    </button>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">KATHMANDU (KTM)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">LUKLA (LUA)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">JOMSOM (JOM)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">POKHARA (PKR)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">BIRATNAGAR (BIR)</a></li><hr/>
                    <li><a className="dropdown-item" href="#">PHAPLU (PPL) </a></li>
                    </ul>
                </span>
                <span className='but'>
                    <button type="button" className="btn btn-danger ms-5"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</button>
                </span>
            </div>      
        </div>  
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Departure Date</th>
              <th>Flight No.</th>
              <th>Sector</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nov 29, 2023</td>
              <td>YT-786</td>
              <td>KTM-LUA</td>
              <td>08 : 00</td>
              <td>08 : 45</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nov 29, 2023</td>
              <td>YT-786</td>
              <td>PKR-KTM</td>
              <td>09 : 05</td>
              <td>09 : 45</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Nov 29, 2023</td>
              <td>YT-786</td>
              <td>BIR-KTM</td>
              <td>10 : 15</td>
              <td>10 : 45</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Nov 29, 2023</td>
              <td>YT-786</td>
              <td>LUA-KTM</td>
              <td>11 : 20</td>
              <td>12 : 00</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default Sch