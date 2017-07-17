import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/';

const routes: Routes = [
  { path: 'contacts',
    children: [
      {
        path: '',
        component: ContactsComponent,
        children: [
          {
            path: ':id',
            component: ContactsDetailComponent,

          }
        ]
      }]
  },
  { path: '**', redirectTo: 'contacts' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
