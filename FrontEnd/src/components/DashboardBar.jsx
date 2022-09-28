import React from 'react'
import {
    NavLink
  } from "react-router-dom";

export default function DashboardBar() {
    var buttonStyle = {
        "width": "94%",
        "margin": "2%"
    }

    return (
        <div class="row">
            <nav class="navbar navbar-light bg-dark container" style={{
                "paddingRight": "2%",
                "marginBottom": "3%",
                "width": "100%",
                "paddingLeft": "2%"
            }} >

                <div className="col-md-4 col-sm-12 col-xs-12">
                    <button class="btn btn-success" style={buttonStyle} type="button" >Holdings</button>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                <button class="btn btn-success" style={buttonStyle} type="button" >Positions</button>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <button class="btn btn-success" style={buttonStyle} type="button" >Button 3</button>
                </div>

            </nav>
        </div >
    )
}
