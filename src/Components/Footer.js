import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; Your Website {year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
