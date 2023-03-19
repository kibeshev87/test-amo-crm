import React from 'react';
import style from '../../style/sections.module.css'
import lineMobileVersion from '../../assets/images/lineMobileVersion.svg'
import {TableRightSection} from "./TableRightSection";
import {FirstSection} from "./FirstSection";
import {SecondSection} from "./SecondSection";


export const Sections = () => {

    const namesLowerSection = ['Skype аудит', '30 виджетов', 'Dashboard', 'Месяц аmoCRM']

    return (
        <div>
            {window.screen.width >= 801
                ? <div className={style.sectionWrapper}>

                    <div className={style.leftSection}>
                        <FirstSection/>
                    </div>

                    <div className={style.rightSection}>
                        <SecondSection/>
                        <ul className={style.tableRightSection}>
                            <TableRightSection name={'Виджеты'} body={'30 готовых решений'}/>
                            <TableRightSection name={'Dashboard'} body={'с показателями вашего бизнеса'}/>
                            <TableRightSection name={'Skype Аудит'} body={'отдела продаж и CRM системы'}/>
                            <TableRightSection name={'35 дней'} body={'использования CRM'}/>
                        </ul>
                        <button className={style.btn}>Получить консультацию</button>
                    </div>

                </div>

                : <div className={style.sectionWrapper}>

                    <div className={style.upperSection}>
                        <FirstSection/>
                    </div>

                    <div className={style.lowerSection}>
                        <SecondSection/>
                        <ul className={style.tableLowerSection}>

                            {namesLowerSection
                                .map((el, index) =>
                                    <li key={index}> <img src={lineMobileVersion} alt=""/> {el} </li>)}
                        </ul>
                    </div>

                </div>
            }
        </div>
    )
}

