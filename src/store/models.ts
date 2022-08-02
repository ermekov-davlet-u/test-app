

export interface selectType {
    value: number | string
    label: string
}
export interface  CargoType {
    id: number
    status: selectType
    date?: Date,
    menadger?: string
    sender?: string
    typeContainer: string
    totalVolume?: string | number
    height?: string | number
    desc?: string
    linkOrder?: string
    delivery?: string
    weight?: string | number
    width?: string | number
    tmc?: string
    locationPort?: string
    file: CargoFileType[]
    length?: string | number
    numberAct?: string
    numberJD?: number
    frahEdin?: string
    done?: boolean
    port?:number
}

export type CargoFileType = {
    id: number
    dataAdd: Date,
    file: File
}
 
export interface FilterType {
    status: selectType | null
    port: selectType | null
    date: Date | null
} 