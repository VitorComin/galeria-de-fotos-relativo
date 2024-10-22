export interface ILayoutHeader {
  setAddressesList: React.Dispatch<React.SetStateAction<IAddresses[]>>;
}

export interface IAddresses {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IContentPage {
  addressesList: IAddresses[];
}
