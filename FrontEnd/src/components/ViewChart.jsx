import React from 'react'
import BuyAndSellColumn from './BuyAndSellColumn'
import LineChart from './LineChart'
import Sidebar from './Sidebar'
import ProfileColumn from './ProfileColumn'
import Navbar from './Navbar'
export default function ViewChart() {
    return (
        
        <div >
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-sm-9 col-xs-9">
                    <div className='container' style={{"marginTop":"6%"}}>
                        <div className='row align-items-center d-flex justify-content-center'>
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
