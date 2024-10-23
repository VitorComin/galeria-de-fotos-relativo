import { ReactNode } from "react";

export interface IAddresses {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface GeneralContextType {
  addressesList: IAddresses[];
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface GeneralProviderProps {
  children: ReactNode;
}
