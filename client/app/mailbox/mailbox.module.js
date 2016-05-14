import { ngmodule } from '../bootstrap/ngmodule';

import { mailboxState, composeEmailState } from './mailbox.state';
import { mailboxComponent } from './mailbox.component';

ngmodule.config(($stateProvider) => {
  'ngInject';

  const states = [mailboxState, composeEmailState];

  states.forEach((state) => $stateProvider.state(state));
})

.component('mailbox', mailboxComponent);
