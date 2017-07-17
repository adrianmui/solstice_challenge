import { Contact, ContactService } from '../shared/';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { _ } from 'underscore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  subscription: Subscription;

  constructor(private contactService: ContactService) {
    console.log(this.constructor.name);

    this.subscription = contactService.changed$.subscribe(contact => {
      const index = _.findIndex(this.contacts, el => contact.id === el.id);
      this.contacts[index] = contact;
    });
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

}
