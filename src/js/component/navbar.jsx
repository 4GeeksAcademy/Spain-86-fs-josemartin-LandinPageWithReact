import React from "react";

const Navbar = () => {
    return(<>
    <div className="pageNavbar">
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><strong>Black Friday</strong></a>
		  <a className="nav-link" aria-current="page" href="#"><strong>Women</strong></a>
		  <a className="nav-link" aria-current="page" href="#"><strong>Men</strong></a>
		  <a className="nav-link" aria-current="page" href="#"><strong>Kids</strong></a>
		  <a className="nav-link" aria-current="page" href="#"><strong>The Originals</strong></a>
		  <a className="nav-link" aria-current="page" href="#"><strong>Gift Guide</strong></a>
        </li>
		<h2 className="pageNavbarHunter" classstyle="border border-5"><strong>HUNTER</strong></h2>
      </ul>
		<div className="search">
			<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
			<div className="icons">
			<i className="fa-solid fa-magnifying-glass">&nbsp;&nbsp;</i>
			<i className="fa-solid fa-heart">&nbsp;&nbsp;</i>
			<i className="fa-solid fa-cart-shopping">&nbsp;&nbsp;</i>
			<i className="fa-regular fa-comment">&nbsp;&nbsp;</i>
			</div>
		</div>
    </div>
  </div>
		</nav>
		</div>
    </>)
}

export default Navbar;