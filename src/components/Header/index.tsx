import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {IoMdExit} from "react-icons/io"
import classes from './Header.module.scss'

function Header() {
    return ( 
        <div className={classes.header}>

            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.search}>
                        <FiSearch className={classes.icon} />
                        <input type="search" className={classes.search_inp} placeholder="Найти коносамент, груз, заказ и др...." />
                    </div>
                </div>
                <div className={classes.right}>
                    <p className={classes.right_text}>
                        Менеджер
                    </p>
                    <button className={classes.header_btn}>
                        NN
                    </button>
                    <button className={classes.header_btn}>
                        <IoMdExit className={classes.icon} />
                    </button>
                </div>
            </div>
            
        </div>
     );
}

export default Header;