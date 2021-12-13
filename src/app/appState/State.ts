import { DataState } from "./DataState";

export interface State<T>{
    dataState: DataState
    appData?: T;
    error?: string;

}