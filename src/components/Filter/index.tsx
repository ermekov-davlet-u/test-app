import React, { useState } from 'react';
import classes from './Filter.module.scss'
import Selector from './../Select/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendarDate } from 'react-icons/bs';
import { selectType } from '../../store/models';
import { cargo } from './../../store/cargo';

function Filter() {
    const [date, setDate] = useState(new Date());
    const [port, setPort] = useState<selectType | null>({
        label: "",
        value: 0
    })
    const [status, setStatus] = useState<selectType | null>({
        label: "",
        value: 0
    })

    function reset() {
        setPort({
            label: "",
            value: 0
        })
        setStatus({
            label: "",
            value: 0
        })
        setDate(new Date())
        cargo.newFilter(null)
    }

    return ( 
        <div className={classes.filter}>
            <h2 className={classes.title}>
                Все грузы
            </h2>
            <div className={classes.container}>
                <Selector value={port} setValue = { setPort }  title="Порт назначения" option={[
                {
                    value: 4,
                    label: 'Архангельск '
                },
                {
                    value: 3,
                    label: 'Певек'
                },
                {
                    value: 2,
                    label: 'Зеленый Мыс'
                },
                {
                  value: 1,
                  label: 'Мыс Шмидта'
                },{
                    value: 4,
                    label: 'Архангельск '
                },
                {
                    value: 3,
                    label: 'Певек'
                },
                {
                    value: 2,
                    label: 'Зеленый Мыс'
                },
                {
                  value: 1,
                  label: 'Мыс Шмидта'
                },
            
            ]} />
                <Selector value={status} setValue = { setStatus } title="Статус"/>
                <div className={classes.date} >
                    <p style={{ marginBottom: '10px', color: '#828282', fontSize: 12, textAlign: 'left', display: "flex", alignItems: 'center'}} >Дата поступления в порт</p>
                    <DatePicker selected={date} onChange={(date:Date) => setDate(date)} />
                    <BsCalendarDate className={classes.date_Icon} />
                </div>
                <div className={classes.btns}>
                    <button className={classes.btn} onClick={reset} > Сбросить</button>
                    <button className={classes.btn} onClick={() => {
                        cargo.newFilter({
                            status: status,
                            port: port,
                            date: date
                        })
                    }}>Применить</button>
                </div>
            </div>
        </div>
     );
}

export default Filter;