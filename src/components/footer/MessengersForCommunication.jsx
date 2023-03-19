import React from 'react';
import telegram from "../../assets/images/telegram_logo.svg";
import viber from "../../assets/images/viber_logo.svg";
import whatsApp from "../../assets/images/whatsApp_logo.svg";

export const MessengersForCommunication = () => {
    return (
        <>
            <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                <img src={telegram} alt="telegram"/>
            </a>
            <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                <img src={viber} alt="viber"/>
            </a>
            <a href="https://welbex.tech/ru/contacts/" target='_blank'>
                <img src={whatsApp} alt="whatsApp"/>
            </a>
        </>
    )
}

