import Selector from "../Select/Select";
import "./index.scss"
import InfoRow from './InfoRow';
import File from './../File/File';
import { BsFileEarmarkPlus } from "react-icons/bs";
import { ChangeEvent, useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import { CargoFileType, CargoType, selectType } from './../../store/models';
import { cargo } from './../../store/cargo';

interface MorePropType extends CargoType{
}

function MoreInfo({
    id,
    status,
    date,
    menadger,
    sender,
    typeContainer,
    totalVolume,
    height,
    desc,
    linkOrder,
    delivery,
    weight,
    width,
    tmc,
    locationPort,
    file,
    length,
    numberAct,
    numberJD,
    frahEdin,
}: MorePropType) {

    const [files, setFiles] = useState<CargoFileType[]>([])

    const [ form ,setForm ] = useState<{status: selectType}>({
        status: {
            value: 1,
            label: "Статус"
        }
    })
    const hundleStatus = (param: any) => {
        setForm( state => ({ ...state, status: param } ))
    }

    useEffect(() => {
        setForm({
            status: status
        })
        setFiles( file )
    }, [])

    async function delFile(id: number){
        const newArrFiles = await files.filter(item => {
            return item.id !== id
        })
        setFiles(newArrFiles)
    }

    async function editCargo(){
        const newCargos = await cargo.cargo.map( item => {
            if(item.id === id){
                item.file = files
                item.status = form.status
            }
            return item
        })
        cargo.newCargos( newCargos )
    }

    return ( 
        <div className={"more"}>
            <div className="more_container">
                <div className="more-elem full_width">
                    <p className="elem_title">
                        Статус
                    </p>
                    <div className="elem_content">
                        <Selector setValue={hundleStatus} value={form.status}/>
                    </div>
                </div>
                <InfoRow title={"Дата поступления груза в порт"} content={date?.toLocaleDateString()} />
                <InfoRow title={"Закрепленный заказ"} content={ <a>Заказ №4329</a> }/>
                <InfoRow title={"Менеджер"} content={menadger}/>
                <InfoRow title={"Закрепленный заказ"} content={linkOrder}/>
                <InfoRow title={"Доставка груза до порта отправления"} content={delivery}/>
                <InfoRow title={"Грузоотправитель"} content={sender}/>
                <InfoRow title={"Тип контейнера"} content={typeContainer}/>
                <InfoRow title={"Масса, тн"} content={weight}/>
                <InfoRow title={"Общий объем, м3"} content={totalVolume}/>
                <InfoRow title={"Длина, метры"} content={length}/>
                <InfoRow title={"Высота, метры"} content={height}/>
                <InfoRow title={"Ширина, метры"} content={width}/>
                <div className="disc">
                    <p className="disc_title"> 
                        Описание груза
                    </p>
                    <p className="disc_text">
                    {
                        desc
                    }
                    </p>
                </div>
                <InfoRow title={"ТМЦ"} content={tmc}/>
                <InfoRow title={"Опора промежуточная"} content={frahEdin}/>
                <InfoRow title={"Расположение груза в порту"} content={locationPort}/>
                <div className="disc">
                    <p className="disc_title"> 
                        Файл транспортной накладной
                    </p>
                    <p className="disc_text" style={{display: "flex", flexDirection: "column"}}>
                        {
                            files.map(item => {
                                return (
                                    <File id={item.id} onDel={ delFile } name={ item.file.name } date = { item.dataAdd.toLocaleDateString() } />
                                )
                            })
                        }
                    </p>
                </div>
                <div className="disc">
                    <p className="disc_title"> 
                        Файл приемного акта
                    </p>
                    <div className="disc_text">
                        <div className="btn_wrap">
                            <input type="file" onChange={(e:ChangeEvent<HTMLInputElement> ) => {
                                const a = e.target?.files?.length? e.target?.files[0] : null
                                console.log((Math.floor(Math.random() * 1000)));
                                
                                if(a){
                                    setFiles( [
                                        ...files, 
                                        {
                                            dataAdd: new Date(),
                                            file: a,
                                            id: (Math.floor(Math.random() * 1000))
                                        }
                                    ])
                                }
                            }} className="file-upload" />
                            <button className="act_btn">
                                <BsFileEarmarkPlus className="act_btn_icon" />
                                    Добавить
                            </button>
                        </div>
                    </div>
                </div>
                <InfoRow title={"Номер приемного акта"} content={"21085-Т"}/>
                <div className="disc">
                    <div className="disc_text">
                        <button className="act_btn" onClick={ editCargo } >
                            <BsFileEarmarkPlus className="act_btn_icon" />
                            Редактировать
                        </button>
                        <button className="act_btn_red" onClick={() => {
                        }}>
                            Разделить груз
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MoreInfo;