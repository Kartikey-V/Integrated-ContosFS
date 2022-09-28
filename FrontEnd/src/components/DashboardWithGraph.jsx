import React from 'react'
import Sidebar from './Sidebar'
import DashboardCard from './DashboardCard'
import LineChart from './LineChart'
import BuyAndSellColumn from './BuyAndSellColumn'
import ProfileColumn from './ProfileColumn'
import Navbar from './Navbar';

export default function DashboardWithGraph() {
  return (
    
    <div >
      <Navbar/>
      <div className="row">
        <div className="col-md-3 col-sm-3 col-xs-3">
        <Sidebar />
        </div>
        <div className="col-md-9 col-sm-9 col-xs-9">
          <DashboardCard />
          <div className='container'>
            <div className='row  d-flex '>
              <div className='col-md-8 ' style={{ "paddingRight": "0" }}>
                <LineChart />
              </div>
              <div className='col-md-4 '>
                <BuyAndSellColumn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
