let template = `
  <h5 ng-if="$ctrl.totalEmails > 0">Total emails: {{$ctrl.totalEmails}}.</h5>
  <h5 ng-if="$ctrl.totalEmails === 0">No emails.</h5>

  <h5 ng-if="$ctrl.unreadEmails > 0">Unread emails: {{$ctrl.unreadEmails}}.</h5>
  <h5 ng-if="$ctrl.unreadEmails === 0">No unread emails.</h5>
`;

let controller = class EmailNotificationBarController {
  constructor() {

  }
};

export let emailNotificationBarComponent = {
  bindings: {
    // input
    totalEmails: '<',
    unreadEmails: '<'

    // output
  },
  template,
  controller
}
