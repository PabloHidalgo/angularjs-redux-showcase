import * as action from './action-types.js';

export function addContact(contact) {
  return {
    type: action.ADD_CONTACT,
    payload: {
      contact
    }
  };
}

export function updateContact(contact) {
  return {
    type: action.UPDATE_CONTACT,
    payload: {
      contact
    }
  };
}

export function deleteContact(id) {
  return {
    type: action.DELETE_CONTACT,
    payload: {
      id: parseInt(id, 10)
    }
  };
}

export default {
  addContact, updateContact, deleteContact
};
