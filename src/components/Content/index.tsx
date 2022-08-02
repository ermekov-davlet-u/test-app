import React, { ChangeEvent, MouseEventHandler, useState } from 'react';
import "./index.scss"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { useRef } from 'react';
import ContentElem from './ContentElem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { observer } from 'mobx-react-lite';
import { cargo } from './../../store/cargo';
import {ImSortAmountDesc} from "react-icons/im"

function Content() {

    const [sort, setSort] = useState<number>(0)
    const [count, setCount] = useState<number>(20)
    const  [pages, setPages] = useState<{
        maxPages: number
        currentPage: number
        count: number
    }>({
        maxPages: 2,
        currentPage: 1,
        count: 2
    })

    return ( 
        <div>
            <div className="container">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-0">
                                <input type="checkbox" onChange={async(e: ChangeEvent<HTMLInputElement>) => {
                            const cargos = await cargo.cargo.map(item => {
                                item.done = !!e.target.checked
                                return item
                            })

                            cargo.newCargos(cargos)

                        }}/>
                            </div>
                            <div className="col col-1" >
                                Номер груза
                                <ImSortAmountDesc className={ sort == 1? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(1)
                                }} />
                            </div>
                            <div className="col col-1">
                                Тип
                                <ImSortAmountDesc className={ sort == 2? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(2)
                                }} />
                            </div>
                            <div className="col col-1">
                                Закрепленный заказ 
                                <ImSortAmountDesc className={ sort == 3? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(3)
                                }} />
                            </div>
                            <div className="col col-1">
                                Грузоотправитель
                                <ImSortAmountDesc className={ sort == 4? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(4)
                                }} />
                            </div>
                            <div className="col col-3">
                                Номер приемного акта
                                <ImSortAmountDesc className={ sort == 5? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(5)
                                }} />
                            </div>
                            <div className="col col-2">
                                Номер транспортной/ЖД накладной
                                <ImSortAmountDesc className={ sort == 6? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(6)
                                }} />
                            </div>
                            <div className="col col-2">
                                Дата поступления в порт
                                <ImSortAmountDesc className={ sort == 7? "col_icon col_icon_active" : "col_icon" } onClick={() => {
                                    setSort(7)
                                }} />
                            </div>
                            <div className="col col-0">
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </li>
                            {
                                cargo.filter ? cargo.cargo.filter(item =>  {
                                    if(cargo.filter?.status?.value) return (item.status?.value === cargo.filter.status?.value)
                                    return true
                                    }
                                ).filter(item => {
                                    if(cargo.filter?.port?.value) return item?.port == cargo.filter.port?.value 
                                    return true
                                }). filter(item => {
                                    console.log(item?.date?.toLocaleDateString());
                                    
                                    if(cargo.filter?.date) return item?.date?.toLocaleDateString() == cargo.filter?.date.toLocaleDateString()
                                    return true
                                }).slice((pages.currentPage * count) - count, (pages.currentPage * count)).sort( (a, b) => {
                                    console.log(sort);
                                    
                                    switch(sort){
                                        case 0:
                                            return b.id - a.id
                                        case 1:
                                            return a.id - b.id;
                                        case 2:
                                            return b.id - a.id;
                                        default:
                                            return a.id - b.id;
                                    }
                                }).map((item, i) => {

                                return( 
                                    <ContentElem item={item} />
                                )
                                }):
                                cargo.cargo.slice((pages.currentPage * count) - count, (pages.currentPage * count)).sort( (a, b) => {
                                    console.log(sort);
                                    
                                    switch(sort){
                                        case 1:
                                            return b.id - a.id;
                                        case 2:
                                            return a.typeContainer > b.typeContainer ? -1: 1
                                        default:
                                            return 1;
                                    }  
                                }).map((item, i) => {

                                    return( 
                                        <ContentElem item={item} />
                                    )
                                    
                                })
                            }
                    </ul>
                    <div className="page">
                        <div className="show-page">
                            <p className="show-page_title">
                                Показывать по:
                            </p>
                            <div className="show-page_pages">
                                <button className={count == 20 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(20)} >20</button>
                                <button className={count == 30 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(30)} >30</button>
                                <button className={count == 50 ? "page_btn page_btn_active": "page_btn"}  onClick={() => setCount(50)} >50</button>
                            </div>
                        </div>
                        <div className="show-page">
                            <button className="pages_btn">
                                <IoIosArrowBack />
                            </button>
                            {

                                // new Array(pages.maxPages).map((item, i) => {})

                                [1,2,3,4,5,6].map((item, i) => {
                                    if(item == pages.currentPage){
                                        return (
                                            <button className="pages_num pages_num_active" onClick={ () => {
                                                setPages(state => {
                                                    return { ...state, currentPage: i }
                                                })
                                            } }>
                                                {
                                                    ++i
                                                }
                                            </button>
                                        )
                                    }
                                    return (
                                        <button className="pages_num" onClick={ () => {
                                            setPages(state => {
                                                return { ...state, currentPage: i }
                                            })
                                        } }>
                                            {
                                                ++i
                                            }
                                        </button>
                                    )
                                })
                            }
                            
                            <button className="pages_btn">
                                <IoIosArrowForward />
                            </button>
                        </div>
                        
                    </div>
                </div>
        </div>
     );
}

export default observer(Content);