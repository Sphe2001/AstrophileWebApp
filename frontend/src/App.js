import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
  
} from "react-router-dom";
import { Navbar } from './componets/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import Service1Page from './pages/services/Service1Page';
import Service3Page from './pages/services/Service3Page';
import Service2Page from './pages/services/Service2Page';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/IVService" element={<Service1Page />} />
          <Route path="/AlgaeService" element={<Service3Page />} />
          <Route path="/SkinTagService" element={<Service2Page />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/register'];
  
  return !hideNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
}
export default App;
