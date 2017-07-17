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

  phone_types = ['mobile', 'work', 'home'];
  phone_pref = 0;

  constructor(private route: ActivatedRoute,
              private contactService: ContactService) {
    console.log(this.constructor.name);

    route.params.subscribe(params => this.loadContact());
  }

  ngOnInit() {
    this.loadContact();

  }

  changePhone() {
    this.phone_pref = (this.phone_pref >= 2) ? 0 : this.phone_pref + 1;
  }

  assignFavorite() {
    console.log('made favorite!');
    this.contactService.makeFavorite(this.contact.id);
  }

  loadContact() {
    this.contact = this.contactService.getContact(this.route.snapshot.params['id']);
    console.log(this.contact);
    this.phone_pref = 0;
  }

}
