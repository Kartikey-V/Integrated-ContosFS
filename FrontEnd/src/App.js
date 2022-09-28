import './App.css';
import { Routes, Route } from 'react-router-dom';

import DashboardWithGraph from './components/DashboardWithGraph';
import Buy from './components/Buy'
import Sell from './components/Sell'
import ViewChart from './components/ViewChart';
import Navbar from './components/Navbar';
import HoldingsPage from './components/HoldingsPage';
import RegistrationPage from './components/RegistrationPage.js'
import Results from './components/Results';
function App() {
  return (
    <div className="App "> 
    {/* <RegistrationPage></RegistrationPage> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/dashboard" exact element={<DashboardWithGraph />} />
        <Route path="/:company" element={< DashboardWithGraph/>} />
        <Route path="/viewchart/:company" element={< ViewChart/>} />
        <Route path='/:company/buy' element={< Buy />}>
          
        </Route>
        <Route path='/:company/sell' element={< Sell />}></Route>
        <Route path="/holdings" element={<HoldingsPage />} />
      </Routes>
       {/* <RegistrationPage></RegistrationPage> */}
       
    </div>
  );
}

export default App;
