const ADD = 'angular-redux-showcase/contacts/ADD';
const UPDATE = 'angular-redux-showcase/contacts/UPDATE';
const DELETE = 'angular-redux-showcase/contacts/DELETE';

export const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case ADD:
      return [
        ...state,
        {name: payload.contact.name, email: payload.contact.email}
      ];
      break;
    case UPDATE:
      return state.map(contact => {
        if (contact.id !== payload.contact.id) return contact;
        return {
          ...contact,
          name: payload.contact.name,
          email: payload.contact.email
        };
      });
      break;
    case DELETE:
      return state.filter(contact => {
        return contact.id !== payload.id;
      });
      break;
    default:
      return state;
  }
}

export function addContact(contact) {
  return {
    type: ADD,
    payload: {
      contact
    }
  };
}

export function updateContact(contact) {
  return {
    type: UPDATE,
    payload: {
      contact
    }
  };
}

export function deleteContact(id) {
  return {
    type: DELETE,
    payload: {
      id: parseInt(id, 10)
    }
  };
}
