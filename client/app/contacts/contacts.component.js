//import {readEmail, deleteEmail} from '../ducks/contacts';

let template = `
  <h1>CONTACTS</h1>

  Total contacts: {{$ctrl.contacts.length}}
`;

let controller = class ContactsController {
  constructor($ngRedux, $scope) {
    'ngInject';

    let actions = Object.assign({}, {} /*{readEmail, deleteEmail}*/),
        disconnect = $ngRedux.connect(this.mapStateToThis, actions)(this);

    $scope.$on('$destroy', () => disconnect());
  }

  mapStateToThis(state) {
    return {
      contacts: state.contacts
    };
  }
};

export let contactsComponent = {
  bindings: {},
  template,
  controller
}
