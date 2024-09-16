import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white">
        <p>Create By Vikash Kumar | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/vikash-kumar-78269923b/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/becodewala-youtube" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/becodewala_youtube/" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@becodewala/home" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
