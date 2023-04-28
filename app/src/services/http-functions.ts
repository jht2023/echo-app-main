import * as dotenv from "dotenv";
// import { IErrorCb } from "./data-models";
// Retrieving environment configuration
dotenv.config();

const jsonMimeType = "application/json";

const handleErrors = (response: Response, onErrorCb?: any) => {  
  if (!response.ok) {    
    if(onErrorCb) {
      onErrorCb(response.status,response.statusText);
    } else {
      throw Error(response.status.toString());
    }   
  }
  return response;
};

export async function getJsonFromApi<ResponseT>(url: string): Promise<ResponseT> {    
  const res = await fetch(url, {
    method: "get",    
    headers: {
      Accept: jsonMimeType
    }
  }).then(handleErrors);
  const resJson = await res.json();

  return resJson as ResponseT;
}

type MethodType = "GET" | "POST" | "PUT" | "DELETE";
function buildCallContents<T>(method: MethodType, json?: T, isImage?:boolean) {
  let headers = {}
  if(!isImage){headers = {
    'Accept': 'application/json'    
  }}
    let callContents = {
      method,
      headers,
      // mode:"cors" as any
    }
    if (json && method!=="GET") {
      callContents.headers = { ...callContents.headers, ...{'Content-Type': 'application/json'}}
      callContents = {...callContents, ...{body: JSON.stringify(json)}};
    }    
    return callContents;
}

function parseTextToJson<IJsonType>(text: string) {
if (text) {
    try {
    return JSON.parse(text) as IJsonType
    } catch {
    console.error(`Tried to convert a non-json object. Returning empty JSON`)
    return {} as IJsonType
    }
} else {
    return {} as IJsonType
}     
}
  
export async function postJson<T,U>(apiPath: string, json: T, onErrorCb?: any) {    
    const callContents = buildCallContents("POST",json);

    console.log("Call contents",callContents);
    console.log("apiPath",apiPath);
    
    const res = await fetch(apiPath, callContents).then(e => handleErrors(e,onErrorCb));

    console.log("RES",res);
    
    const txtContent = await res.text();
    
    return parseTextToJson<U>(txtContent);
  }

  function buildImageCallContents<T>(method: MethodType, file:any) {        
      let callContents = {
        method:"POST",        
        body:file
      }
   
      return callContents;
  }
  export async function postImage<U>(apiPath: string, json: any, onErrorCb?: any) {        

    const formData = new FormData();
    formData.append("image", json.image);
    const callContents = buildImageCallContents("POST",formData);        
    const res = await fetch(apiPath, callContents).then(e => handleErrors(e,onErrorCb));
    const txtContent = await res.text();
    
    return parseTextToJson<U>(txtContent);
  }

  export async function postAndReceiveImage<U>(apiPath: string, json: any, onErrorCb?: any) {        

    const formData = new FormData();
    formData.append("image", json.image);
    const callContents = buildImageCallContents("POST",formData);        
    const res = await fetch(apiPath, callContents).then(e => handleErrors(e,onErrorCb));
        
    const txtContent = await res.blob();    
    return URL.createObjectURL(txtContent)
    
    // return parseTextToJson<U>(txtContent);
  }