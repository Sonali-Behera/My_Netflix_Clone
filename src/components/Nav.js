import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false);
      }
    });
    return (() => {
      window.removeEventListener("scroll", null);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
          onClick={() => navigate("/")}
          className="nav_logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
          alt="Netflix Logo"   
        />
        <img 
          onClick={() => navigate("/profile")} 
          className="nav_avatar" 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Netflix Logo" 

        />
    </div>
  );
}

export default Nav;