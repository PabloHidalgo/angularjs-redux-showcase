import {readEmail, deleteEmail} from '../ducks/emails';

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

    // let actions = Object.assign({}, {readEmail, deleteEmail}),
    //     disconnect = $ngRedux.connect(this.mapStateToThis, actions)(this);

    //taken from:
    //https://github.com/goopscoop/ga-react-tutorial/blob/6-reduxActionsAndReducers/src/containers/toDoAppContainer.js

    let disconnect = $ngRedux.connect(this.mapStateToThis, this.mapDispatchToTarget)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  mapStateToThis(state) {
    return {
      emails: state.emails
    };
  }

  mapDispatchToTarget(dispatch) {
    return {
      readEmail: (id) => dispatch(readEmail(id)),
      deleteEmail: (id) => dispatch(deleteEmail(id))
    }
  }
};

export let mailboxComponent = {
  bindings: {},
  template,
  controller
}
