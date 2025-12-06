import type { ReactNode } from "react"

export interface ICards{
    img : string,
    title : string,
    description : string
    alt : string
    id? : string
    to? : string
    path? : string
}

export interface ISolutions{
    img:string,
    paragraph:string
}

export interface IFooter {
    icon : ReactNode
    data : string
}

export interface IPage {
    title : string
    to : string
}