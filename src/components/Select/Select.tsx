import Select from 'react-select'
import React, { Component } from 'react'
import { selectType } from '../../store/models';

interface SelectPropType {
  title?: string 
  setValue: (param: any) => void;
  value?: any
  option?: selectType[]
}

function Selector({title, setValue, value, option = [
  {
      value: 4,
      label: 'Погружен'
  },
  {
      value: 3,
      label: 'Прибыл'
  },
  {
      value: 2,
      label: 'Назначен ответственный менеджер'
  },
  {
    value: 1,
    label: 'Новый'
  },

] }: SelectPropType) {

    const customStyles = {
        option: (provided: any, state: any) => ({
          margin: 0,
          ...provided,
          color: '#2A2E37',
          cursor: 'pointer',
          backgroundColor: state.isSelected ? '#E3E6EB;' : 'white',
          padding: 20,
          maxWidth: 240,
          fontSize: 14
          
        }),
        control: () => ({
          width: 240,
          display: "flex",
          backgroundColor: "white",
          marginTop: 0,
          fontSize: 14,
          cursor: "pointer",
        }),
        singleValue: (provided: any, state: any) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }

    return ( 
        <div style={{ maxWidth: 240, background: "#FFFFFF", border: "1px solid #EEEEEE", borderRadius: "8px", padding: 12}}>
        { title? <p style={{ color: '#828282', fontSize: 12, textAlign: 'left', display: "flex", alignItems: 'center' }}> { title } <div style={{ marginLeft: 8, width: "16px", height: "14px", borderRadius: "50%", border: "1px solid #E0E0E0", color: "#CECECE", textAlign: "center", paddingTop: "2px" }}>?</div> </p> : ""}
        <Select
            styles={customStyles}
            placeholder="Новый"
            onChange={(s) => {
              setValue(s);
              
            }}
            value={value}
            options={option}
            />
        </div>
     );
}

export default Selector;