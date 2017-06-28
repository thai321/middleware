import { FETCH_USER } from '../actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_USER:
      // console.log(action.payload);
      // Object {  data: Array(10), status: 200, statusText: "",
      // headers: Object, config: Object…   }
      return [...state, ...action.payload.data];
  }
  return state;
}
