// src/components/Header.jsx
import React from "react";
import "./header.css"

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="name">
        <h1 className="text-youtube-header">YouTube</h1>
        <h1 className="text-header">para MP3</h1>
      </div>

      <nav className="nav">
        <a className="header-button" onClick={() => onMenuClick("home")}>Home</a>
        <a className="header-button" onClick={() => onMenuClick("sobre")}>Sobre</a>
        <a className="header-button" onClick={() => onMenuClick("contato")}>Contato</a>
      </nav>
    </header>
  );
};

export default Header;
