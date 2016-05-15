import contacts from './contacts';

import { INITIAL_STATE } from './contacts';
import { addContact, updateContact, deleteContact } from './contacts';

describe('contacts reducer', () => {
  let initialState = null;

  beforeEach(function(){
    initialState = contacts(undefined, 'reduxInitAction');
  });

  it('should be created with an initial state', () => {
    expect(initialState).to.deep.equal(INITIAL_STATE);
  });

  // it('should set contacts list', () => {
  //   const settedEvent = {
  //     type: CONTACT_LOADED
  //   };
  // });

  it('should add a contact', () => {
    const payload = {
      name: 'sut contact',
      email: 'sutact.contact@karma.runner.com'
    };

    const nextState = contacts(initialState, addContact(payload));
    expect(nextState[0].name).to.be.equal(payload.name);
  });

  it('should remove a contact', () => {
    initialState = [
      ...initialState,
      {id: 999, name: 'sut contact', email: 'sut.contact@karma.runner.com'}
    ];

    const payload = {
        id: 999
    };

    const expectedLength = initialState.length - 1;
    const nextState = contacts(initialState, deleteContact(payload.id));
    expect(nextState.length).to.be.equal(expectedLength);
  });

  it('should update a contact', () => {
    initialState = [
      ...initialState,
      {id: 999, name: '-', email: '-'}
    ];

    const payload = {
      id: 999,
      name: 'updated sut contact',
      email: 'updated.sut.contact@karma.runner.com'
    };

    const nextState = contacts(initialState, updateContact(payload));
    const updatedContact = nextState.filter((elem) => elem.id === payload.id)[0];

    expect(updatedContact.email).to.be.equal(payload.email);
  });
});
