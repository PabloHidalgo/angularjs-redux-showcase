import * as action from './action-types.js';

export function readEmail(emailId) {
  return {
    type: action.READ_EMAIL,
    payload: {
      emailId: parseInt(emailId, 10)
    }
  };
}

export function deleteEmail(emailId) {
  return {
    type: action.DELETE_EMAIL,
    payload: {
      emailId: parseInt(emailId, 10)
    }
  };
}

export default {
  readEmail, deleteEmail
};
