import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormControlName, AbstractControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.sass']
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cS: ContactService,
    private router: Router
    ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')
      ]),
      address: this.fb.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        zip: new FormControl('',  [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*')
        ]),
        city: new FormControl('',  [
          Validators.required,
          Validators.minLength(5),
        ]),
      }),
    });
  }

  onSubmit() {
    let contact = {
      id: Math.round(Math.random()*10000),
      firstName: this.contactForm.value['firstName'],
      lastName: this.contactForm.value['lastName'],
      telephone: this.contactForm.value['telephone'],
      address: this.contactForm.value['address'],

    }
    this.cS.addContact(contact);
    this.router.navigate(['contacts']);
  }
}
