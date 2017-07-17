import { Injectable } from '@angular/core';
import * as _ from 'underscore';

import * as Data from './../../../db/mock-data.json';
import Contact from './contact.model';


@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  constructor() {
    Data.forEach((entry, index) => {
      let newContact: Contact = {id: index, ...entry };
      this.contacts.push(newContact);
    })
  }

  /** constructor needs `this` and doesn't let me use stateless functions*/
  getContacts = (): Contact[] => (this.contacts);

  getContact = (id: Number): Contact => ( _.find(this.contacts, el => el.id === id));
}
