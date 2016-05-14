const READ = 'angular-redux-showcase/emails/READ';
const DELETE = 'angular-redux-showcase/emails/DELETE';

export const INITIAL_STATE = [
  {
    id: 1,
    title: '0001 - Hello World! Redux Edition',
    body: '<h1>Hello my ngFriend!</h1>'
  },
  {
    id: 2,
    title: '0002 - Hello World! Redux Edition',
    body: '<h1>Hello my ngFriend!</h1>'
  },
  {
    id: 3,
    title: '0003 - Hello World! Redux Edition',
    body: '<h1>Hello my ngFriend!</h1>'
  }
];

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case READ:
      return state.map(email => {
        if (email.id !== payload.id) return email;
        return {
          ...email,
          isReaded: true,
        };
      });
    case DELETE:
      return state.filter(item => {
        return item.id !== payload.id;
      });

    default:
      return state;
  }
}

export function readEmail(id) {
  return {
    type: READ,
    payload: {
      id: parseInt(id, 10)
    }
  };
}

export function deleteEmail(id) {
  return {
    type: DELETE,
    payload: {
      id: parseInt(id, 10)
    }
  };
}
