import { Contact } from '../../shared/';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from './../../shared/';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;

  phone_pref: string = "mobile";

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    console.log(this.constructor.name);

    route.params.subscribe(params => this.loadContact());
  }

  ngOnInit() {
    this.loadContact();
  }
  loadContact() {
    this.contact = this.contactService.getContact(parseInt(this.route.snapshot.params['id']));
  }

}
