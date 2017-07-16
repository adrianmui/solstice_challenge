import { Contact, ContactService } from '../shared/';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
