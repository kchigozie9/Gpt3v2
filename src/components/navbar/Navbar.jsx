import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Meun = () => (
  <>
  <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">Intellectual</a></p>
      <p><a href="#features">Maintenance</a></p>
      <p><a href="#possibility">MegzCraft</a></p>
      <p><a href="#blog">My Blog</a></p>
      </>
)

const Navbar = () => {
  const [toggleMeun, setToggleMeun] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="gpt3__navbar-links_container">
     <Meun/>
      </div>
      </div>
     <div className="gpt3__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign Up</button>
     </div>
     <div className="gpt3__navbar-meun">
      {toggleMeun
      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMeun(false)}/>
      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMeun(true)}/> }
    {toggleMeun && (
      <div className="gpt3__navbar-meun_container scale-up-center"> 
      <div className="gpt3__navbar-meun_container-links">
      <Meun/>
      <div className="gpt3__navbar-meun_container-links-sign">
      <p>Sign in</p>
      <button type="button">Sign Up</button>
     </div>
      </div>
      </div>
    )

    }
     </div>
      </div>
  )
}

export default Navbar