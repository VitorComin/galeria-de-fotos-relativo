import { createContext, useState } from "react";
import {
  GeneralContextType,
  GeneralProviderProps,
  IAddresses,
} from "../types/GeneralTypes";

export const GeneralContext = createContext<GeneralContextType>({
  addressesList: [],
  setAddressesList: () => {},
});

export const GeneralProvider = ({ children }: GeneralProviderProps) => {
  const [addressesList, setAddressesList] = useState<IAddresses[]>([]);

  return (
    <GeneralContext.Provider value={{ addressesList, setAddressesList }}>
      {children}
    </GeneralContext.Provider>
  );
};
