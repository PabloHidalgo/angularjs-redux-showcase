import { ngmodule } from '../bootstrap/ngmodule';

import { contactsState } from './contacts.state';
import { contactsComponent } from './contacts.component';

ngmodule.config(($stateProvider) => {
  'ngInject';

  const states = [contactsState];

  states.forEach((state) => $stateProvider.state(state));
})

.component('contacts', contactsComponent);
