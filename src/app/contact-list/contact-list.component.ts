import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {
  contacts;
  constructor(
    private cS: ContactService,
  ) { }

  ngOnInit() {
    this.contacts = this.cS.getContacts();
  }

}
