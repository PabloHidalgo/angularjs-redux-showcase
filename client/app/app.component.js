import {unreadEmailsSelector} from './redux/selectors/unread-emails';

let template = `
  <email-notification-bar
    total-emails="$ctrl.totalEmails.length"
    unread-emails="$ctrl.unreadEmails.length">
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
      totalEmails: state.emails,
      unreadEmails: unreadEmailsSelector(state)
    }
  }
};

export let appComponent = {
  bindings: {},
  template,
  controller
};
