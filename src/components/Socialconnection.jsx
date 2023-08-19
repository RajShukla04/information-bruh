import "./socialvonnection.css";
import { FaInstagramSquare } from "react-icons/fa";
import { PiTelegramLogoFill } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import React from "react";

const Socialconnection = () => {
  return (
    <div className="socialconnections">
      <div className="wrapped-connections">
        <div className="instagram">
          <FaInstagramSquare />
        </div>
        <div className="telegram">
          <PiTelegramLogoFill />
        </div>
        <div className="enail">
          <TfiEmail />
        </div>
      </div>
    </div>
  );
};

export default Socialconnection;
