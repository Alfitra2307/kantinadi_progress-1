import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import DasborPage from './pages/Dasbor';
import RegisterPage from './pages/RegisterPage';
import PesananBaru from './pages/PesananBaru';


const App = () => {
   return (
     <Router>
       <Routes>
         <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/dasbor" element={<DasborPage />} />
         <Route path="/PesananBaru" element={<PesananBaru />} />
         <Route path="/insight" element={< insightPage/>} />
         <Route path="/" element={<LoginPage />} />
         <Route path="*" element={<LoginPage />} />
       </Routes>
     </Router>
   ); 
};

export default App;
