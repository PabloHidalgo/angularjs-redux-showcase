let template = `
  <email-notification-bar
    total-emails="$ctrl.totalEmails"
    unread-emails="$ctrl.unreadEmails">
  </email-notification-bar>

  <div ui-view></div>
`;

let controller = class AppController {
  constructor($ngRedux, $scope) {
    'ngInject';

    let disconnect = $ngRedux.connect(this.mapStateToThis)(this);
    $scope.$on('$destroy', () => disconnect());
  }

  mapStateToThis(state) {
    return {
      totalEmails: state.emails.length,
      unreadEmails: state.emails.filter((email) => !email.isReaded).length
    }
  }
};

export let appComponent = {
  bindings: {},
  template,
  controller
};

/*
la idea es usar el map state to this aquí para obtener el número de unread emails.

posteriormente mover a selectores.

class ItemDetailController {
  constructor($ngRedux, $scope, ItemsActions) {
    'ngInject';
    let unsubscribe = $ngRedux.connect(this.mapStateToThis, ItemsActions)(this);

    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      selectedItem: Object.assign({}, state.selectedItem)
    }
  }

  save(item) {
    this.saveItem(item);
    this.resetItem();
  }
}

export default ItemDetailController;



import emailActions from '../actions/email-actions';

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

    let disconnect = $ngRedux.connect(
      (state) => ({emails: state.email}),
      emailActions)(this);

    $scope.$on('$destroy', () => disconnect());
  }
};

export let mailboxComponent = {
  bindings: {},
  template,
  controller
}


 */
