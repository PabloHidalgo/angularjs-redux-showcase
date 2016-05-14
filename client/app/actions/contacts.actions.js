export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: {
      contact
    }
  };
}

export function updateContact(contact) {
  return {
    type: UPDATE_CONTACT,
    payload: {
      contact
    }
  };
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    payload: {
      id: parseInt(id, 10)
    }
  };
}

export default {
  addContact, updateContact, deleteContact
};
