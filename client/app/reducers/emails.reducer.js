import * as actions from '../actions/action-types.js';

//CHECK duck container
//https://github.com/goopscoop/ga-react-tutorial/blob/6-reduxActionsAndReducers/src/redux/modules/toDoApp.js

//import * as R from 'ramda';

/**
data structure

emails: [{
  id: number,
  title: string,
  isReaded: boolean
}]

**/

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

export function emails(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case actions.READ_EMAIL:
      return _reduceRead(state, payload.emailId);
    case actions.DELETE_EMAIL:
      return _reduceDelete(state, payload.emailId);
    default:
      return state;
  }
}

function _reduceRead(state, emailId) {
  return state.map(email => {
    if (email.id !== emailId) return email;
    return {
      ...email,
      isReaded: true,
    };
  });
}

function _reduceDelete(state, emailId) {
  return state.filter(item => {
    return item.id !== emailId;
  });
}

// case EMAIL_READED:
//   const email = findById(state, payload.emailId);
//   const index = state.indexOf(email);
//
//   email.isReaded = true;
//
//   return Object.assign(
//     {},
//     state,
//     [
//         ...state.slice(0, index),
//         Object.assign({}, email),
//         ...state.slice(index+1)
//     ]
//   );

// function findById(elements, id) {
//   var index = elements.map(function (element) {
//       return element.id;
//     }).indexOf(id);
//
//   return elements[index];
// }

/*
switch (action.type) {
       case 'TOGGLE_STORY':
         var story = findById(state.stories, action.payload.id);
         story.isResolved = !story.isResolved;

         state.stories[state.stories.indexOf(story)] = angular.copy(story);

         break;
     }

     return state;

     function findById(elements, id) {
       var index = elements.map(function (element) {
           return element.id;
         }).indexOf(id);

       return elements[index];
     }
 */
