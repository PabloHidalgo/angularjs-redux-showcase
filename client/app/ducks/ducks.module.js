import * as redux from 'redux';

import emails from './emails';
import contacts from './contacts';

export const ducks = redux.combineReducers({
  emails,
  contacts
});
