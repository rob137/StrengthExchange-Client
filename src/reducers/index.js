import * as actions from '../actions';

const initialState = {
  programs: [{
    "type": "program",
    "_id": "5aaf72ca086bbd0004bea321",
    "name": "Jim's Beach Workout",
    "userId": "5aaf72ca086bbd0004bea8f0",
    "summary": "blah blah blah",
    "dateLastUpdated": "2018-03-16T15:13:09.666Z"
    }, {
      "type": "program",
      "_id": "5aaf72ca086bbd0004bea322",
      "name": "Jane's Beach Workout",
      "userId": "5aaf72ca086bbd0004bea8f1",
      "summary": "blah blah blah",
      "dateLastUpdated": "2018-03-16T15:13:09.666Z"
    }
  ]
};

export const reducer = (state=initialState, action) => {
  if (action.type === actions.ADD_PROGRAM) {
    let name = action.name
        .replace(/\s+/g, ' ')
				.trim();
		// Only create new program if program name is unique
    let match = state.programs.filter(item => item.name === name);
    if (match.length === 0) {
    	return Object.assign({}, state, {
    	  programs: [...state.programs, {
          name: action.name,
          summary: action.summary
    	  }]
    	}); 
    }
  }
  return state;
};

