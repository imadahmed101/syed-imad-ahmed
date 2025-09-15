import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Projects from './pages/Projects/Projects'
import Error from './pages/Error/Error'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Footer from './components/Footer';

import SiteFix from './projects/SiteFix';
import WillisMonroeInsurance from './projects/WillisMonroeInsurance';
import Trendily from './projects/Trendily'
import MissionPossible from './projects/MissionPossible';

import ScrollToTop from './components/ScrollToTop';
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Thanks from './pages/Thanks/Thanks'
import CookieSettings from './components/CookieSettings'
import ReactGA from 'react-ga4'

export const Context = React.createContext();

function App() {
  const [cookieSettings, setCookieSettings] = useState(localStorage.getItem('cookieSettings'))
  
  useEffect(() => {
    if (cookieSettings === 'allow') {

      const TRACKING_ID = process.env.REACT_APP_TRACKING_ID
      ReactGA.initialize(TRACKING_ID)
      console.log('ga init')
    }    
  }, [cookieSettings])

  return (
    <Context.Provider value={[cookieSettings, setCookieSettings]}>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<Form />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/sf' element={<SiteFix />} />
        <Route path='/projects/wmi' element={<WillisMonroeInsurance />} />
        <Route path='/projects/mp' element={<MissionPossible />} />
        <Route path='/projects/trnd' element={<Trendily />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Contact/>
      {!cookieSettings && <CookieSettings/>}
      <Footer />
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
