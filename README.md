## Adrian Mui

### SolsticeChallenge - Front End with Angular 2 TS/ES6 and sass

``` running it:
  npm install
  ng build
  ng server
```

```stuff:
  localhost:4200/contacts/
  localhost:4200/contacts/:id
  3 components
    contacts
      caches the json data
    contacts-list
      displays on the LHS in blocks, able to scroll and add future lazy loading capabilities
    contacts-detail
      renders a full description of the selected contact.
      click between phone #s to see mobile, home, cell.
      click the star to favorite/unfavorite the contact.
  1 service
    contact service
      really there to take in the data and add id #s.
      added observables to subscribe to changes in the contacts array. it sends the new data to ContactsComponent which flows/updates the data down to its child components.
  1 typings
    contact model
      defining my contacts because i don't need the rest of the properties in each data entry
  sass  
    i decided to make app.component.scss my global sass because i disagreed with how angular-cli has its own weird stylesheet inheritance-blocker.
```

```external:
  material design icons
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
