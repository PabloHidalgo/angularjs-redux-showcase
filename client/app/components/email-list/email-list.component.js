let template = `
  <a ui-sref="mailbox.compose">Compose new email!</a>

  <ul>
    <email-list-item
      ng-repeat="email in $ctrl.emails" email="email"
      on-email-delete="$ctrl.onEmailDelete({emailId: email.id});"
      on-email-open="$ctrl.onEmailOpen({emailId: email.id});">
    </email-list-item>
  </ul>

  <h1 ng-if="$ctrl.emails.length === 0">You have no emails.</h1>
`;

let controller = class EmailListController {
  constructor() {

  }
};

export let emailListComponent = {
  bindings: {
    // input
    emails: '<',

    // output
    onEmailDelete: '&',
    onEmailOpen: '&'
  },
  template,
  controller
}
