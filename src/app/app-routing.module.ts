import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  {
    path: 'contact/add',
    component: ContactAddComponent,
  },
  {
    path: 'contact/update/:id',
    component: ContactUpdateComponent,
  },
  {
    path: 'contact/detail/:id',
    component: ContactDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
