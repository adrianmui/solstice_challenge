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

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact {
    console.log(`get contact ${typeof id}`)
    return _.find(this.contacts, el =>  {
      return el.id === id;
    }
    );
  }
}
