import * as redux from 'redux';

import {emails} from './emails.reducer';
import {contacts} from './contacts.reducer';

export const rootReducer = redux.combineReducers({
  contacts,
  emails
});
