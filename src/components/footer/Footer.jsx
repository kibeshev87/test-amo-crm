import React from 'react';
import style from '../../style/footer.module.css'
import {MessengersForCommunication} from "./MessengersForCommunication";

export const Footer = () => {

    const nameMenuBlocks = ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты',
        'Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ']
    const nameMobileMenu = ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты',
        'Благодарность клиентов', 'Кейсы', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ']

    return (
        <>
            {window.screen.width >= 641
                ? <div>
                    <ul className={style.footerWrapper}>

                        <li>
                            <h4>О компании</h4>
                            <a href="https://welbex.tech/ru/#" target='_blank'>Партнёрская программа</a>
                            <a href="https://welbex.tech/ru/contacts/" target='_blank'>Вакансии</a>
                        </li>

                        <li>
                            <h4>Меню</h4>
                            <div className={style.menuBlocks}>
                                {nameMenuBlocks.map((el, index) =>
                                    <a key={index} href="https://welbex.tech/ru/contacts/" target='_blank'>{el}</a>)}
                            </div>
                        </li>

                        <li className={style.footerContacts}>
                            <h4>Контакты</h4>
                            <div className={style.contactsWrapper}>
                                <span>+7 555 555-55-55</span>
                                <div className={style.telegramContainer}>
                                    <MessengersForCommunication/>
                                </div>
                                <span className={style.addressCompany}> Москва, Путевой проезд 3с1, к 902 </span>
                            </div>
                        </li>
                    </ul>

                    <div className={style.securitySign}>
                        <p>©WELBEX 2022. Все права защищены. <br/> <span>Политика конфиденциальности</span></p>
                    </div>

                </div>

                : <div className={style.mobileWrapper}>
                    <ul className={style.baseWrapper}>

                        <li className={style.mobileAboutUs}> {/*className={style.footerAboutUs}*/}
                            <h4>О компании</h4>
                            <a href="https://welbex.tech/ru/#" target='_blank'>Партнёрская программа</a>
                            <a href="https://welbex.tech/ru/contacts/" target='_blank'>Вакансии</a>
                        </li>

                        <li className={style.mobileMenu}> {/*className={style.footerMenu}*/}
                            <h4>Меню</h4>
                            <div className={style.menuBlocks}>
                                {nameMobileMenu.map((el, index) =>
                                    <a key={index} href="https://welbex.tech/ru/contacts/" target='_blank'>{el}</a>)}
                            </div>
                        </li>

                        <li className={style.mobileContacts}> {/*className={style.footerContacts}*/}
                            <h4>Контакты</h4>
                            <div className={style.contactsWrapper}>
                                <span>+7 555 555-55-55</span>
                                <div className={style.mobileTelegramContainer}>
                                    <MessengersForCommunication/>
                                </div>
                                <span> Москва, Путевой проезд 3с1, к 902 </span> {/*className={style.addressCompany}*/}
                            </div>
                        </li>

                    </ul>

                    <div className={style.securitySign}>  {/* {style.mobileSecuritySign} */}
                        <p>©WELBEX 2022. Все права защищены. <br/> <span>Политика конфиденциальности</span></p>
                    </div>

                </div>
            }
        </>
    )
}

