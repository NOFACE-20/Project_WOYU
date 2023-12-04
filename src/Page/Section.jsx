import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Flight from './Component/Flight/Flight'
import Hotel from './Component/Hotel/Hotel'
import Travel from './Component/Travel/Travel'
import Status from './Component/Info/Status'
import Sch from './Component/Info/Sch'
import Hoteldet from './Component/Hotel/Hoteldet'
import Traveldet from './Component/Travel/Traveldet'

function Section() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Flight/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/flightstatus' element={<Status/>}/>
        <Route path='/flightschedule' element={<Sch/>}/>
        <Route path='/hotel/:hot_id' element={<Hoteldet/>}/>
        <Route path='/travel/:tra_id' element={<Traveldet/>}/>
      </Routes>
    </>
  )
}

export default Section