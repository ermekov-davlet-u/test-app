import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Menu.module.scss"
import { FaClipboardList, FaRegUser } from "react-icons/fa"
import { TbTallymark4, TbBuildingBank} from "react-icons/tb"
import { RiShipLine } from 'react-icons/ri'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { CgList } from 'react-icons/cg'
import classNames from 'classnames';


export default function Menu() {
  return (
    <>
    <div className={classes.container}>
        <div className={classes.top}>
            <h1 className={classes.top_title}>Logo</h1>
            <button className={classes.top_btn}>
                +
            </button>
        </div>
        <nav className={classes.menu}>
            <ul className={classes.menu_ul}>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={ isActive =>  classes.menu_link }>
                        <CgList className={classes.menu_icon}/> Все заказы
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <TbTallymark4 className={classes.menu_icon}/> Все грузы
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <RiShipLine className={classes.menu_icon}/> Порты
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <FaRegUser className={classes.menu_icon}/> Пользователи
                    </NavLink>
                </li>
                <li className={classNames(classes.menu_li, classes.mt18)}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <TbBuildingBank className={classes.menu_icon}/> Все Организации
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <HiOutlineDocumentText className={classes.menu_icon}/> Все документы
                    </NavLink>
                </li>
                <li className={classNames(classes.menu_li, classes.mt18)}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <FaClipboardList className={classes.menu_icon}/> Вопрос-ответ
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <FaClipboardList className={classes.menu_icon}/> Политика конфиденциальности
                    </NavLink>
                </li>
                <li className={classes.menu_li}>
                    <NavLink to={"/"} className={classes.menu_link}>
                        <FaClipboardList className={classes.menu_icon}/> История обновлений
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    </>
  )
}