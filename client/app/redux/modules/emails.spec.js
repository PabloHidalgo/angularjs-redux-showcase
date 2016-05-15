import emails from './emails';

import { INITIAL_STATE } from './emails';
import { readEmail, deleteEmail } from './emails';

describe('emails reducer', () => {
  let initialState = null;

  beforeEach(function(){
    initialState = emails(undefined, 'reduxInitAction');
  });

  it('should be created with an initial state', () => {
    expect(initialState).to.deep.equal(INITIAL_STATE);
  });

  it('should mark an email as readed', () => {
    const payload = 1;

    const nextState = emails(initialState, readEmail(payload));
    expect(nextState[0].isReaded).to.be.true;
  });

  it('should delete an email', () => {
    const payload = 1;

    const nextState = emails(initialState, deleteEmail(payload));
    expect(nextState[0].id).to.be.equal(2);
  });
});
