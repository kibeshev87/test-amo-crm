import React from 'react';
import style from "../../style/header.module.css";
import logoImg from "../../assets/images/img_logo.svg";
import logoWeldex from "../../assets/images/logo_welbex.svg";

export const Logo = () => {
    return (
        <div className={style.logo}>
            <a href="#">
                <img src={logoImg} alt=""/>
                <img src={logoWeldex} alt=""/>
                <p>крупный интегратор CRM <br/> в Росcии и ещё 8 странах</p>
            </a>
        </div>
    )
}

