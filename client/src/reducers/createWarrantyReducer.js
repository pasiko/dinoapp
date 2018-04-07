import { CREATE_WARRANTY } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_WARRANTY:
        console.log("KUKKUU!");
        return state;
    default:
      return state;
  }
};
