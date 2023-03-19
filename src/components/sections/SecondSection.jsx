import React from 'react';
import style from "../../style/sections.module.css";

export const SecondSection = () => {
    return (
        <>
            <h2>Вместе с <span className={style.firstSpanRightSect}>бесплатной </span> <br/>
                <span className={style.secondSpanRightSect}>консультацией </span>
                мы дарим:
            </h2>
        </>
    )
}

