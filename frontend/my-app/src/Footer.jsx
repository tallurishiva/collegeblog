import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 my-4" style={{backgroundColor:"rgb(245, 245, 245)",marginBottom:"0"}}>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">News</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Ideas</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">College stories</a></li>
      </ul>
      <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
    </footer>
  );
};

export default Footer;
