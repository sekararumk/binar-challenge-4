import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import InfoMobil from './Pages/InfoMobil'

const App = () => {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/info-mobil/:id' element={<InfoMobil />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
