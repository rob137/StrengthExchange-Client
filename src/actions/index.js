import { API_BASE_URL } from '../config';

export const ADD_PROGRAM = 'ADD_PROGRAM';
export const addProgram = (name, summary) => ({
  type: ADD_PROGRAM,
  name,
  summary
});

export const FETCH_PROGRAMS_SUCCESS = 'FETCH_PROGRAMS_SUCCESS';
export const fetchProgramsSuccess = programs => ({
  type: FETCH_PROGRAMS_SUCCESS,
  programs
})

export const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS';
export const fetchCalendarSuccess = calendar => ({
  type: FETCH_CALENDAR_SUCCESS,
  calendar
})

export const POST_PROGRAM_SUCCESS = 'POST_PROGRAM_SUCCESS';
export const postProgramSuccess = program => ({
  type: POST_PROGRAM_SUCCESS,
  program
})

export const fetchPrograms = () => dispatch => {
  fetch(`${API_BASE_URL}/programs`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(programs => {
      dispatch(fetchProgramsSuccess(programs));
    });
}

// Fetches workout calendar for a specific workout program
export const fetchCalendar = (programId) => dispatch => {
  fetch(`${API_BASE_URL}/days/program/${programId}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(calendar => {
      dispatch(fetchCalendarSuccess(calendar))
    });
}


export const postProgram = (program, userId) => dispatch => {
  fetch(`${API_BASE_URL}/programs`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: program.name,
      summary: program.summary,
      userId: userId // Using dummy userId for now
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(program=> {
      dispatch(postProgramSuccess(program));
    })
}
