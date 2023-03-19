import React from 'react';
import style from "../../style/sections.module.css";

export const TableRightSection = (props) => {
    return (
        <li className={style.presentsLi}>
            <h3>{props.name}</h3>
            <span>{props.body}</span>
        </li>
    )
}

