import * as redux from 'redux';

import emails from './emails';
import contacts from './contacts';

export const rootReducer = redux.combineReducers({
  emails,
  contacts
});
