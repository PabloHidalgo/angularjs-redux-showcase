export const READ_EMAIL = 'READ_EMAIL';
export const DELETE_EMAIL = 'DELETE_EMAIL';

export function readEmail(emailId) {
  return {
    type: READ_EMAIL,
    payload: {
      emailId: parseInt(emailId, 10)
    }
  };
}

export function deleteEmail(emailId) {
  return {
    type: DELETE_EMAIL,
    payload: {
      emailId: parseInt(emailId, 10)
    }
  };
}

export default {
  readEmail, deleteEmail
};
