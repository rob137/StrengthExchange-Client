import * as actions from '../actions';

const initialState = {
  programs: [],
  calendar: [],
  userId: 'Dummy ID for development'
};

export const reducer = (state=initialState, action) => {
  if (action.type === actions.FETCH_PROGRAMS_SUCCESS) {
    return Object.assign({}, state, {
      programs: action.programs.programs
    });
  }
  else if (action.type === actions.FETCH_CALENDAR_SUCCESS) {
    return Object.assign({}, state, {
      calendar: action.calendar
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

