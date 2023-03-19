import React from 'react';
import telegram from "../../assets/images/telegram_logo.svg";
import style from "../../style/header.module.css";
import viber from "../../assets/images/viber_logo.svg";
import whatsApp from "../../assets/images/whatsApp_logo.svg";

export const ContactLink = () => {
    return (
        <ul className={style.headerForCommunication}>
            <li>+7 555 555-55-55</li>

            <li>
                <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                    <img src={telegram} alt="telegram"/>
                </a>
            </li>

            <li>
                <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                    <img src={viber} alt="viber"/>
                </a>
            </li>

            <li>
                <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                    <img src={whatsApp} alt="whatsApp"/>
                </a>
            </li>

        </ul>
    )
}

