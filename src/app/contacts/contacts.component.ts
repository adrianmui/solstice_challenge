import { Contact } from '../shared/';
import { Component, OnInit } from '@angular/core';

import * as Data from './../../../db/mock-data.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor() {
    console.log(this.constructor.name);

  }

  ngOnInit() {
    Data.forEach((entry, index) => {
      let newContact: Contact = {id: index, ...entry };
      this.contacts.push(newContact);
    })

    console.log(this.contacts);
  }

}
