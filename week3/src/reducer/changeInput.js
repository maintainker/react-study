function changeInput(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default changeInput;
