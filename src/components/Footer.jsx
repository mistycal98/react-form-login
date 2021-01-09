import React from "react";
import style from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h1>Get in Touch ➜</h1>
        <h4>CopyRight @ Tushar Mistry</h4>
      </div>
      <div className={style.icon}>
        <i className="fab fa-whatsapp fa-3x"></i>
        <i className="fab fa-github fa-3x"></i>
        <i class="far fa-envelope fa-3x"></i>
      </div>
    </div>
  );
};

export default Footer;
