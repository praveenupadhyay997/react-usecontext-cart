import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white text-center p-4">
      © {new Date().getFullYear()} All rights reserved.
    </div>
  );
};

export default Footer;
