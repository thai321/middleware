export default function({ dispatch }) {
  return next => action =>  {
    // console.log(action); // {type: __ , payload: Promise}

    // If action dows not have payload
    // or, the paylaod dows not have a .then property
    // we don't care about it, send it on to next middleware
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    // console.log('We have a promise: ', action);
    // We have a promise

    action.payload // keyword 'then', make sure the aciton's promise resolves
      .then(response => {
        // Create a new action with the old type, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response }
        dispatch(newAction); // send it to everything again
        // flow to all the middleware again

      });
  };
}


//function(next) {
  // return function(action) {
    // next(action)
  // }
// }
