import React from 'react';
import "./Navbar.css"

export default function First() {

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <div className='navigation'>
        <nav>
          <div className="leftnav">
            <span><i className="far fa-snowflake"></i> SaruMovies <i className="far fa-snowflake"></i></span></div>
          <div className="rightnav">
            <li> <a className='contact' href="#">Movies</a></li>
            <li> <a className='contact mx-3' href="#">Drama</a></li>
            <li> <a className='contact' href="#">Series</a></li>
            <span className='icon' onClick={openNav}>&#9776;</span>
          </div>

          <div id="mySidenav" class="sidenav">
            <a class="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">Movies</a>
            <a href="#">Drama</a>
            <a href="#">Series</a>
          </div>
        </nav>
      </div>
    </>
  );
}