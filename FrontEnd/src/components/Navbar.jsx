import React from 'react'

export default function Navbar() {
    return (
        <div>  
            {/* <header className="p-3 mb-3 border-bottom">
            <div className="container" style={{"margin":"0"}}>
                <div className="d-flex flex-wrap align-items-center  justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <img src='https://thumbs.dreamstime.com/b/bar-chart-vector-icon-flat-isolated-white-background-editable-eps-file-illustration-96778806.jpg' style={{ "borderRadius": "100%", "width": "5%", "marginLeft": "20%", "marginRight": "25%", "marginTop": "5%" }}></img>
                    </a>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link "><span className="material-symbols-outlined">
monitoring
</span></a></li>
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img>
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header> */}
         <header className="py-3 mb-3 border-bottom">
    <div className="container-fluid d-grid gap-3 align-items-center" style={{"gridTemplateColumns": "1fr 2fr"}}>
      <div className="dropdown">
        {/* <a href="#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
          <svg className="bi me-2" width="40" height="32"></svg>
        </a> */}
        {/* <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
          <li><a className="dropdown-item active" href="#" aria-current="page">Overview</a></li>
          <li><a className="dropdown-item" href="#">Inventory</a></li>
          <li><a className="dropdown-item" href="#">Customers</a></li>
          <li><a className="dropdown-item" href="#">Products</a></li>
          <li><hr className="dropdown-divider"></hr></li>
          <li><a className="dropdown-item" href="#">Reports</a></li>
          <li><a className="dropdown-item" href="#">Analytics</a></li>
        </ul> */}
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link "><span className="material-symbols-outlined">monitoring
</span></a></li>
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>
      </div>

      <div className="d-flex align-items-center">
        {/* <form className="w-100 me-3">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
        </form> */}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
        <div className=" dropdown ">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">Name</a></li>
            <li><a className="dropdown-item" href="#">Holdings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
        </div>
    )
}

