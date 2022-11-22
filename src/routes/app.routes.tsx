import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contents from '../pages/MediumTicket'
import HomeMulvi from '../pages/HomeMulvi'
import HomeMulviDesty from '../pages/HomeMulviDesty'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeMulviDesty />} />
            {/* <Route path='/' element={<HomeMulvi />} /> */}
            <Route path='/medium-ticket' element={<Contents />} />
            <Route path='/main-mistakes' element={<Contents />} />
            <Route path='/working-capital' element={<Contents />} />
            <Route path='/antecipation' element={<Contents />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
