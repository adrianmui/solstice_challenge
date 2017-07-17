import { Injectable } from '@angular/core';
import { _ } from 'underscore';

import * as Data from './../../../db/mock-data.json';
import Contact from './contact.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];

  private changed = new Subject<Contact>();
  changed$ = this.changed.asObservable();

  constructor() {
    Data.forEach((entry, index) => {
      const newContact: Contact = {id: index, ...entry };
      this.contacts.push(newContact);
    });
  }

  /** constructor needs `this` and doesn't let me use stateless functions*/
  getContacts = (): Contact[] => (this.contacts);

  getContact = (id): Contact => {
    return _.find(this.contacts, el => el.id === parseInt(id));
  }


  makeFavorite = (id: number): void => {
    const index = _.findIndex(this.contacts, el => id === el.id);
    this.contacts[index].favorite = !this.contacts[index].favorite;
    this.changed.next(this.contacts[index]);
  }
}
