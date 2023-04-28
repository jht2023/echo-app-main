import { IAnalyzedImage } from "../models/image";


export interface IResponseWithMessages<T> {
    messages: string[];
    extra: T;
}

export interface ISearchRange {
    initialDate: Date;
    finalDate: Date;
}

export interface IApiClient {
    ping(): Promise<IPingResponse>;
    analyseImage(imageData: string): Promise<IResponseWithMessages<IAnalyzedImage>>;    
}
  
export interface IErrorCb {
    (errorStatus: number, errorMessage: string): void;
}
  
export interface IPingResponse {
    version: string;
}