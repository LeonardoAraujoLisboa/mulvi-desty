import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contents from '../pages/Contents'
import HomeMulvi from '../pages/HomeMulvi'
import HomeMulviDesty from '../pages/HomeMulviDesty'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeMulviDesty />} />
            {/* <Route path='/' element={<HomeMulvi />} /> */}
            <Route path='/contents' element={<Contents />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
