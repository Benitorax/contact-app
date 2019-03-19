import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts;

  constructor() { 
    this.contacts = [
      {
        id: '1',
        firstName: 'Pierre',
        lastName: 'Desprogres',
        telephone: '0684789054',
        address: {
          street: '12 boulevard du Général de Gaulle',
          zip: '75020',
          city: 'Paris',
        }
      },
      {
        id: '2',
        firstName: 'Phillippe',
        lastName: 'Gelluck',
        telephone: '0484789054',
        address: {
          street: '127 avenue de la Paix',
          zip: '75010',
          city: 'Paris',
        }
      },
    ];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  updateContact(oldContact, newContact) {
    let index = this.getContacts().indexOf(oldContact);
    this.contacts[index] = newContact;
  }

  getContacts() {
    return this.contacts;
  }

  getContact(id) {
    let contact = this.getContacts().find(elem => {
      return elem.id == id 
    });
    return contact;
  }
}
