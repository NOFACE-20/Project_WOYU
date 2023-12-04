import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <div className="foot container-fluid">
        <div className="row">
          <div className="f col-3">YuWo Airlines</div>
          <div className="s col-4">
            <div className="second">Contact</div>
            <div><a href=""> Contact Us</a></div>
            <div><a href="">Inquiry/Feedback</a></div>
            <div><a href="">Login</a></div>
            <div><a href="">Hazard Identification Report</a></div>
            <div><a href="">Frequently Asked Questions</a></div>
          </div>
          <div className="t col-5">
            <div className="suru">
              <div className="third">Customer Support</div>
              <div><a href=""><FontAwesomeIcon icon={faLocationDot} className='me-2'/>Lainchour, Kathmandu, Nepal</a></div>
              <div><a href=""><FontAwesomeIcon icon={faPhone} className='me-2'/>  +977-01-5970074</a></div>
              <div><a href=""><FontAwesomeIcon icon={faEnvelope} className='me-2'/>  ecommerce@yuwoairlines.com</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastfoot container-fluid pt-2">
        <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
        <span>Copyright 2023 YuWo Airlines . All rights reserved</span>
      </div>
    </>
  )
}

export default Footer