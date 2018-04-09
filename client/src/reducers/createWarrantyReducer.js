import { CREATE_WARRANTY } from '../actions/';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_WARRANTY:
        return state;
    default:
      return state;
  }
};
