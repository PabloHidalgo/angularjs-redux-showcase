import * as actions from '../actions/action-types.js';

/**
data structure

contacts: [{
  id: number,
  name: string,
  email: string
}]

**/

export const INITIAL_STATE = [];

export function contacts(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case actions.ADD_CONTACT:
      return _reduceAdd(state, payload);
    case actions.UPDATE_CONTACT:
      return _reduceUpdate(state, payload);
    case actions.DELETE_CONTACT:
      return _reduceDelete(state, payload);
    default:
      return state;
  }
}

function _reduceAdd(state, {name, email}) {
  return [
    ...state,
    {name, email}
  ];
}

function _reduceUpdate(state, {id, name, email}) {
  return state.map(contact => {
    if (contact.id !== id) return contact;
    return {
      ...contact,
      name,
      email
    };
  });
}

function _reduceDelete(state, {id}) {
  return state.filter(contact => {
    return contact.id !== id;
  });
}
