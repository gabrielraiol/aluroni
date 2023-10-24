import { useState } from "react";
import styles from "./Computer.module.scss";
import options from "./options.json";
import classNames from "classnames";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

export default function Computer() {

    const [open, setOpen] = useState(false);

    return (
        <button 
        className={styles.computer} 
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        >
            <span>Ordenar Por</span>
            {open? < MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={classNames({[styles.computer__options]:true, [styles["computer__options--active"]]: open})}>
                {options.map(option => (
                    <div className={styles.computer__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}