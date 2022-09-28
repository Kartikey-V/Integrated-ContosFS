import React, { useState } from 'react'
import {
    NavLink
  } from "react-router-dom";

export default function SidebarListGroup(props) {

    const [portfolios, setPortfolios] = useState(props.listItems)

    const navLinkStyles = ({isActive}) =>{
        // console.log(isActive, i);
        return {
            backgroundColor: isActive ? "blue" : "white"
        }
    }

    return  <>
        {portfolios.map((item) => {
            return <NavLink to={"/"+item.heading} style={navLinkStyles}  className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between" id={item.heading}>
                    <strong className="mb-1">{item.heading}</strong>
                    <small><NavLink to={"/viewchart/"+item.heading} ><button className='btn btn-light' style={{"borderRadius":"40%","fontSize":"10px"}}>View chart</button></NavLink></small>
                </div>
            </NavLink>
        })}
    </>
}
