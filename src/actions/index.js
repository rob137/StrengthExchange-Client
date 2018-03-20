export const ADD_PROGRAM = 'ADD_PROGRAM';
export const addProgram = (name, summary) => ({
  type: ADD_PROGRAM,
  name,
  summary
});
