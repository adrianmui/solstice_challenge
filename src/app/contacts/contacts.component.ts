import { Contact } from '../shared/';
import { Component, OnInit } from '@angular/core';

import * as Data from './../../../db/mock-data.json';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = Data;

  constructor() {
    console.log(this.constructor.name);

  }

  ngOnInit() {
  }

}
