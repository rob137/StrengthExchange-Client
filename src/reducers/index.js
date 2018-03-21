import * as actions from '../actions';

const initialState = {
  programs: [],
  userId: 'Dummy ID for development'
};

export const reducer = (state=initialState, action) => {
  /* 
  Redundant now Thunk is in place?

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
  else  */
  if (action.type === actions.FETCH_PROGRAMS_SUCCESS) {
    return Object.assign({}, state, {
      programs: action.programs.programs
    });
  }
  else if (action.type === actions.POST_PROGRAM_SUCCESS) {
    return Object.assign({}, state, {
      programs: [...state.programs, action.program],
      userId: state.userId
    })
  }
  return state;
};

