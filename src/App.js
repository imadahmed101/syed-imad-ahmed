import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Error from './pages/Error'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
