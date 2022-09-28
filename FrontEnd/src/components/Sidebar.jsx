import React from 'react'
import SidebarListGroup from './SidebarListGroup'


export default function Sidebar() {
    
    const listItems = [
        {
            "heading": "Shell",
            "lastUpdated": "Wed",
            "placeholder": "View Stats"
        },
        {
            "heading": "Total",
            "lastUpdated": "Wed",
            "placeholder": "View Stats"
        },{
            "heading": "BP",
            "lastUpdated": "Wed",
            "placeholder": "View Stats"
        },{
            "heading": "Chevron",
            "lastUpdated": "Wed",
            "placeholder": "View Stats"
        },{
            "heading": "Exxon ",
            "lastUpdated": "Wed",
            "placeholder": "View Stats"
        }
    ]

    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{"marginLeft":"13%" }} >
            <a href="/" className="d-flex  flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <svg className="bi me-2" width="30" height="24"><use href="#bootstrap" /></svg>
                <span className="fs-5 fw-semibold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                List group</span>
            </a>
            <div className="list-group list-group-flush border-bottom scrollarea">
                <nav>
                <SidebarListGroup listItems={listItems}/>
                </nav>
            </div>
        </div>
    )
}
