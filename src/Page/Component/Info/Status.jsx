import { faArrowRightArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Status() {
  return (
    <>
        <div className="stat">
            <div className="heading">Flight Status</div>
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
            <div className='sn'>
                <span >  S.N</span>
                <span>Origin</span>
                <span>Destination</span>
                <span>Flight No</span>
                <span className='me-4'>Status</span>
                <span className='ms-5'>ETD</span>
                <span>Revised Time</span>
            </div>
            <div className='li'>
                <span > 1</span>
                <span >Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3'>YT-302 </span>
                <span className='me-5'>Cancelled</span>
                <span className='ms-2'>6:15</span>
                <span></span>
            </div>
            <div className='li'>
                <span > 2</span>
                <span>Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3 me-1'>YT-301</span>
                <span className='me-5'>Cancelled</span>
                <span className='ms-2'>6:15</span>
                <span></span>
            </div>
            <div className='li'>
                <span > 3</span>
                <span>Biratnagar</span>
                <span>Kathmandu</span>
                <span className='ms-2'>YT-301</span>
                <span className='me-5 ms-2'>Departed</span>
                <span className='ms-2'>7:00</span>
                <span>7:08</span>
            </div>
            <div className='li'>
                <span > 4</span>
                <span>Kathmandu</span>
                <span className='me-2'>Simara</span>
                <span className='ms-4 me-2'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>8:00</span>
                <span>8:34</span>
            </div>
            <div className='li'>
                <span > 5</span>
                <span >Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3'>YT-302 </span>
                <span className='me-5'>Cancelled</span>
                <span className='ms-2'>6:15</span>
                <span></span>
            </div>
            <div className='li'>
                <span > 6</span>
                <span>Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3 me-1'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>6:15</span>
                <span>6:34</span>
            </div>
            <div className='li'>
                <span > 7</span>
                <span>Biratnagar</span>
                <span>Kathmandu</span>
                <span className='ms-2'>YT-301</span>
                <span className='me-5 ms-2'>Departed</span>
                <span className='ms-2'>7:00</span>
                <span>7:08</span>
            </div>
            <div className='li'>
                <span > 8</span>
                <span>Kathmandu</span>
                <span className='me-2'>Simara</span>
                <span className='ms-4 me-2'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>8:00</span>
                <span>8:34</span>
            </div>
            <div className='li'>
                <span > 9</span>
                <span>Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3 me-1'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>6:15</span>
                <span>6:34</span>
            </div>
            <div className='li'>
                <span > 10</span>
                <span>Biratnagar</span>
                <span>Kathmandu</span>
                <span className='ms-2'>YT-301</span>
                <span className='me-5 ms-2'>Departed</span>
                <span className='ms-2'>7:00</span>
                <span>7:08</span>
            </div>
            <div className='li'>
                <span > 11</span>
                <span>Kathmandu</span>
                <span className='me-2'>Simara</span>
                <span className='ms-4 me-2'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>8:00</span>
                <span>8:34</span>
            </div>
            <div className='li'>
                <span > 12</span>
                <span>Kathmandu</span>
                <span>Mountain</span>
                <span className='ms-3 me-1'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>6:15</span>
                <span>6:34</span>
            </div>
            <div className='li'>
                <span > 13</span>
                <span>Biratnagar</span>
                <span>Kathmandu</span>
                <span className='ms-2'>YT-301</span>
                <span className='me-5 ms-2'>Departed</span>
                <span className='ms-2'>7:00</span>
                <span>7:08</span>
            </div>
            <div className='li'>
                <span > 14</span>
                <span>Kathmandu</span>
                <span className='me-2'>Simara</span>
                <span className='ms-4 me-2'>YT-301</span>
                <span className='me-5'>Departed</span>
                <span className='ms-2'>8:00</span>
                <span>8:34</span>
            </div>
        </div>
        </div>
    </>
  )
}

export default Status
