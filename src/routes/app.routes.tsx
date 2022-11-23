import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeMulvi from '../pages/HomeMulvi'
import HomeMulviDesty from '../pages/HomeMulviDesty'
import MediumTicket from '../pages/MediumTicket'
import MainMistakes from '../pages/MainMistakes'
import WorkingCapital from '../pages/WorkingCapital'
import Antecipation from '../pages/Antecipation'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeMulviDesty />} />
            {/* <Route path='/' element={<HomeMulvi />} /> */}
            <Route path='/contents/:id/medium-ticket' element={<MediumTicket />} />
            <Route path='/contents/:id/main-mistakes' element={<MainMistakes />} />
            <Route path='/contents/:id/working-capital' element={<WorkingCapital />} />
            <Route path='/contents/:id/antecipation' element={<Antecipation />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
