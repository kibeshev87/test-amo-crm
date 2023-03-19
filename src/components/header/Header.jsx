import React from 'react';
import style from '../../style/header.module.css'
import {NavBar} from "./NavBar";
import {ContactLink} from "./ContactLink";
import {Logo} from "./Logo";

export const Header = () => {

    const navBarArr1 = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']
    const navBarArr2 = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы']

    return (
        <>
            {window.screen.width > 1001 &&
                <div className={style.headerWrapper}>
                    <Logo/>
                    <ul className={style.navBar}>
                        {navBarArr1.map((el, index) => <NavBar key={index} text={el}/>)}
                    </ul>
                    <ContactLink/>
                </div>
            }

            {window.screen.width >= 801 && window.screen.width <= 1000
                && <div className={style.headerWrapper}>
                    <Logo/>
                    <div>
                        <ul className={style.navBar}>
                            {navBarArr1.map((el, index) => <NavBar key={index} text={el}/>)}
                        </ul>
                        <ContactLink/>
                    </div>
                </div>
            }

            {window.screen.width <= 800
                && <ul className={style.mobileMenu}>
                    {navBarArr2.map((el, index) => <NavBar key={index} text={el}/>)}
                </ul>
            }

        </>
    )
}