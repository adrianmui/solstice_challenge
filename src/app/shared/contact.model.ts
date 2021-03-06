export default class Contact {
  id: number;
  name: string;
  company: string;
  phone: {
    work: string;
    home: string;
    mobile: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  favorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  email: string;
  birthdate: string;
}
