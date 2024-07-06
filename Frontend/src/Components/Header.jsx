import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goContact = () => {
    navigate("/contact");
  };

  const goHome = () => {
    navigate("/");
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goFacilities = () => {
    navigate("/facilities");
  };
  const goAdmission = () => {
    navigate("/admission");
  };

  const goAdministration = () => {
    navigate("/administration");
  };



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const dbdbdbDiv = document.getElementById('dbdbdb');

      if (dbdbdbDiv && scrollPosition > dbdbdbDiv.offsetTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="bg-black text-white relative">
      <div className="bg-blue-900 text-white py-1">
        <div className={`container mx-auto flex justify-between items-center transition-transform duration-300 ${isFixed ? '-translate-y-full' : 'translate-y-0'}`}>
          <div>
            <a href="tel:9846423448" className="mr-4">📞 21e423r3rt3</a>
            <a href="mailto:admin@vjec.ac.in">✉️ admin@RVHSS.ac.in</a>
          </div>
          <div className="hidden md:flex flex-wrap justify-between items-center space-x-2">
            <button onClick={goHome} className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200 ">Home</button>
            <button onClick={goAbout} className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200">About</button>
            <button onClick={goFacilities}  className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200">Facilities</button>
            <button  onClick={goAdmission} className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200">Admission</button>
            <button onClick={goAdministration} className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200">Administration</button>
            <button  onClick={goContact} className="bg-blue-900 px-4 py-2 rounded hover:text-customOrange transition duration-100 ease-in-out delay-200">Contact</button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-white h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-2">
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Scholarship</button>
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Contact</button>
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Scholarship</button>
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Contact</button>
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Scholarship</button>
          <button className="bg-blue-700 px-4 py-2 rounded w-full text-center">Contact</button>
        </div>
      )}

      <div id="dbdbdb" className={`bg-white text-black py-6 ${isFixed ? 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300' : 'relative'}`}>
        log  and   more details need to update
      </div>
    </header>
  );
};

export default Header;
