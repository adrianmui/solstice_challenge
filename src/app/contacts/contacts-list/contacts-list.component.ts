import { Contact } from '../../shared/';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {

  @Input() contact: Contact;

  constructor(private router: Router) {
    console.log(this.constructor.name);
  }

  selectContact(contact: Contact): void {
    this.router.navigate(['/contacts', contact.id]);
  }

}
