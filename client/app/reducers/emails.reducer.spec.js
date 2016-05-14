import { emails } from './emails.reducer';

import { READ_EMAIL, DELETE_EMAIL } from './../actions/emails.actions';
import { INITIAL_STATE } from './emails.reducer';

describe('emails reducer', () => {
  let initialState = null;

  beforeEach(function(){
    initialState = emails(undefined, 'reduxInitAction');
  });

  it('should be created with an initial state', () => {
    expect(initialState).to.deep.equal(INITIAL_STATE);
  });

  it('should mark an email as readed', () => {
    const readedEvent = {
      type: READ_EMAIL,
      payload: {
        emailId: 1,
      }
    };

    const nextState = emails(initialState, readedEvent);
    expect(nextState[0].isReaded).to.be.true;
  });

  it('should delete an email', () => {
    const deletedEvent = {
      type: DELETE_EMAIL,
      payload: {
        emailId: 1,
      }
    };

    const nextState = emails(initialState, deletedEvent);
    expect(nextState[0].id).to.be.equal(2);
  });
});
