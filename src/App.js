import { BrowserRouter,Routes, Router,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Component/AboutUs.js';
import Navbar from './Component/Navbar.js';
import Video from './Component/Video.js';
import Mission from './Component/Mission.js';
import Menu from './Component/Menu.js';
import TimeProject from './Component/TimeProject.js';
import Footer from './Component/Footer.js';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       {/* <Navbar/> */}
       <Menu/>
      <Routes>
        <Route path="/" element={<Video />} /> Define route for Video component
        {/* Add more routes for other components if needed */}
      </Routes>
      <AboutUs/>
      <Mission/>
      <TimeProject/>
      {/* <Footer/> */}
    </BrowserRouter>
   {/* <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Video />} /> 
      </Routes>
    </BrowserRouter> */}
{/* <AboutUs/>   */}

    </div>
  );
}

export default App;
