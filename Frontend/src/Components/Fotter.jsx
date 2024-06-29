import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-blue-footer">
      {/* Container for the footer content */}
      <div className="container mx-auto py-8 px-4 lg:px-0">
        {/* Flex container for the five sections */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* First section */}
          <div className="w-full sm:w-1/2 lg:w-1/5 ">
            <h2 className="text-lg font-semibold text-white mb-2">Contact Information</h2>
            <p className='text-gray-400'>Jyothi Nagar, Chemperi (PO)</p>
            <p className='text-gray-400'>Kannur - 670632, Kerala, India.</p>
            <p className='text-gray-400'>9846423448, 9400062919</p>
            <p className='text-gray-400'>admin@vjec.ac.in</p>
            <p className='text-gray-400'>vjecmail@gmail.com</p>
          </div>

          {/* Second section */}
          <div className="w-full  sm:w-1/2 lg:w-1/5">
            <h2 className="text-lg text-white font-semibold mb-2">Quick Links</h2>
            <ul className='text-gray-400'>
              <li>Academic Calendar</li>
              <li>Grievance Redressal</li>
              <li>Maintenance Request Forms</li>
              <li>Contact</li>
              <li>Placements</li>
              <li>Kerala Technological University (KTU) Affiliation</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Third section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="text-lg text-white font-semibold mb-2">About</h2>
            <ul className='text-gray-400'>
              <li>About VJEC</li>
              <li>Management</li>
              <li>Statutory Committee</li>
              <li>Officials</li>
              <li>VJEC Anthem</li>
              <li>Mandatory Disclosure</li>
              <li>Plastic Ban Policy</li>
              <li>Energy Usage Policy</li>
            </ul>
          </div>

          {/* Fourth section */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h2 className="text-lg font-semibold mb-2 text-white">Notice Board</h2>
            <ul className='text-gray-400'>
              <li>Newsletters</li>
              <li>Go Green Messages</li>
              <li>VJEC @ Media</li>
            </ul>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
