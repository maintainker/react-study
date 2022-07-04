const closureFunc = () => {
  let state = 0;
  let lastState = 0;
  const setState = (newState) => {
    lastState = state;
    state = newState;
  };
  const getState = () => {
    return state;
  };
  return { getState, setState };
};

const test = closureFunc();
test.setState(3);
console.log(test.getState());
