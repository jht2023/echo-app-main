import React from 'react'
import { IApiClient } from './services/';

export interface IAppContextValue {
	apiClient: IApiClient | null
}

const AppContext = React.createContext<IAppContextValue>({
  apiClient: null
})

export const AppContextProvider = AppContext.Provider
export const AppContextConsumer = AppContext.Consumer

export default AppContext