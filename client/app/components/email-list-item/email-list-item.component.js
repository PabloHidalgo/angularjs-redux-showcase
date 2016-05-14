let template = `
  <h5 ng-click="$ctrl.onEmailDelete({emailId: $ctrl.email.id})">[X]</h5>
  <h1 ng-click="$ctrl.onEmailOpen({emailId: $ctrl.email.id});">{{$ctrl.email.title}}</h1>

  <h3 ng-if="!$ctrl.email.isReaded">[PENDING TO BE READED]</h3>
`;

let controller = class EmailListItemController {
  constructor() {

  }
};

export let emailListItemComponent = {
  bindings: {
    // input
    email: '<',

    // output
    onEmailDelete: '&',
    onEmailOpen: '&'
  },
  template,
  controller
}
