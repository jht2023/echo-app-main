import { IAppContextValue } from "../app-context";
import {ApiClient}  from "../services/";


export default async function makeAppContextValue(): Promise<IAppContextValue> {
  // const hostname = window.location.host;
  const hostname = "localhost";
  // const hostname = "0.0.0.0";
  // const hostname = "133.95.105.120";
  // const hostname = "192.168.11.36";
  const protocol = window.location.protocol === "https" ? "https" : "http";
  // const port = 3000
  const port = 5000

  const defaultAppContextValue: IAppContextValue = {
    apiClient: new ApiClient(hostname,protocol, port),    
  }

  return defaultAppContextValue;
}