import emailActions from '../actions/emails.actions';

let template = `
  <h1>MAILBOX</h1>

  <email-list
    emails="$ctrl.emails"
    on-email-open="$ctrl.readEmail(emailId);"
    on-email-delete="$ctrl.deleteEmail(emailId);">
  </email-list>

  <email
    email-data="$ctrl.displayedEmail">
  </email>
`;

let controller = class MailboxController {
  constructor($ngRedux, $scope) {
    'ngInject';

    let disconnect = $ngRedux.connect(this.mapStateToThis, emailActions)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  mapStateToThis(state) {
    return {
      emails: state.emails
    };
  }
};

export let mailboxComponent = {
  bindings: {},
  template,
  controller
}
