import React from 'react'
import Cart from './Cart';
import './cart.css';
function Header()
{
    return(
        <React.Fragment>
         {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
         <nav className="navbar navbar-expand-lg headerbg">
  <div className="container">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Training
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Virtual Classroom</a></li>
            <li><a className="dropdown-item" href="#">Live Webinar</a></li>
            
            <li><a className="dropdown-item" href="#">In Person</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Membership</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='cart'>        
      <Cart/>
      </div>
            
          <a className="nav-link" href="#">Login</a>
       
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}

export default Header;