import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className=" wings container-fluid ">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/368045271_1034393567891640_5595568270336773167_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=ci-y4Xc6u24AX-rcAe0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTN9O3kibrD9o_lTq65_xSiJ8wuYiIwuSb21BvzLA7ofA&oe=658B0DEE" alt="" height={60} width={150} className=' me-1'/>
                <span className='text-end text-center fs-3 fw-bold fst-italic lh-lg'>YuWo Wings: Your Safe Passage in Skies</span>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/384573661_1036372584360227_6810371722513484935_n.jpg?stp=dst-jpg_s526x296&_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_ohc=n1aXP06yB4UAX9vXJHe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWv9leDbEchvFX5A3yFzFxBVfqye49T2CeN881tjMflA&oe=658B022B" alt="" height={60} width={150} className=' ms-1'/>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        <div classname="container">
  <nav className="navbar navbar-expand-lg">
    <div className="st container-fluid">
        <span className="head  fw-bolder fs-1 me-5 fst-italic ps-5"> YuWo Airlines</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item pe-3 ps-5">
            <Link className="nav-link active" aria-current="page" to="/">FLIGHT</Link>
          </li>
          <li className="drpit nav-item dropdown pe-3">
            <Link className="nav-link dropdown-toggle" to="" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              FLIGHT INFO
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><Link className="dropdown-item" to="/flightstatus">FLIGHT STATUS</Link></li><hr className='hr'/>
              <li><Link className="dropdown-item" to="/flightschedule">FLIGHT SCHEDULE</Link></li>
            </ul>
          </li>

          <li className="nav-item pe-3">
            <Link className="nav-link active" aria-current="page" to="/hotel">HOTEL</Link>
          </li>
          <li className="nav-item pe-3">
            <Link className="nav-link active" aria-current="page" to="/travel">TRAVEL</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="word form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="but ms-2 me-3" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
    </>
  )
}

export default Header