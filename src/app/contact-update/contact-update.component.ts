import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormControlName, AbstractControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.sass']
})
export class ContactUpdateComponent implements OnInit {
  contactForm: FormGroup;
  contact;

  constructor(
    private fb: FormBuilder,
    private cS: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.contact = this.cS.getContact(id); 

    this.contactForm = this.fb.group({
      firstName: new FormControl(this.contact.firstName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl(this.contact.lastName, [
      Validators.required,
      Validators.minLength(4),
      ]),
      telephone: new FormControl(this.contact.telephone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')
      ]),
      address: this.fb.group({
        street: new FormControl(this.contact.address.street, [
          Validators.required,
          Validators.minLength(5),
        ]),
        zip: new FormControl(this.contact.address.zip,  [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*')
        ]),
        city: new FormControl(this.contact.address.city,  [
          Validators.required,
          Validators.minLength(5),
        ]),
      }),
    });
  }

  onSubmit() {
    let newContact = {
      id: this.contact.id,
      firstName: this.contactForm.value['firstName'],
      lastName: this.contactForm.value['lastName'],
      telephone: this.contactForm.value['telephone'],
      address: this.contactForm.value['address'],

    }
    this.cS.updateContact(this.contact, newContact);
    this.router.navigate(['contacts']);
  }

}
