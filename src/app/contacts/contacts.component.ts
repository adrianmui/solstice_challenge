import { Contact, ContactService } from '../shared/';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  sum: number = 100;
  throttle: number = 300;
  scrollDistance: number = 2;

  constructor(private contactService: ContactService) {
    console.log(this.constructor.name);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  //  onScrollDown () {
  //   console.log('scrolled!!');
  //   // add another 20 items
  //   const start = this.sum;
  //   this.sum += 20;
  // }

}
