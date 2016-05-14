import * as actions from '../actions/action-types.js';
import { contacts } from './contacts.reducer';
import { INITIAL_STATE } from './contacts.reducer';

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
    const addedEvent = {
      type: actions.ADD_CONTACT,
      payload: {
        name: 'sut contact',
        email: 'sutact.contact@karma.runner.com'
      }
    };

    const nextState = contacts(initialState, addedEvent);
    expect(nextState[0].name).to.be.equal(addedEvent.payload.name);
  });

  it('should update a contact', () => {
    initialState = [
      ...initialState,
      {id: 999, name: '-', email: '-'}
    ];

    const updatedEvent = {
      type: actions.UPDATE_CONTACT,
      payload: {
        id: 999,
        name: 'updated sut contact',
        email: 'updated.sut.contact@karma.runner.com'
      }
    };

    const nextState = contacts(initialState, updatedEvent);
    const updatedContact = nextState.filter((elem) => elem.id === updatedEvent.payload.id)[0];

    expect(updatedContact.email).to.be.equal(updatedEvent.payload.email);
  });

  it('should remove a contact', () => {
    initialState = [
      ...initialState,
      {id: 999, name: 'sut contact', email: 'sut.contact@karma.runner.com'}
    ];

    const deletedEvent = {
      type: actions.DELETE_CONTACT,
      payload: {
        id: 999
      }
    };

    const expectedLength = initialState.length - 1;
    const nextState = contacts(initialState, deletedEvent);
    expect(nextState.length).to.be.equal(expectedLength);
  });
});
