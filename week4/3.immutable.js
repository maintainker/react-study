const makeFreezedObj = (originObj = Object.create(null), newObj) => {
  return Object.freeze({ ...originObj, ...newObj });
};

const createStore = () => {
  let state = makeFreezedObj(undefined, { count: 1 });
  const getState = () => ({ ...state });
  const increment = () => {
    state = makeFreezedObj(state, { count: state.count + 1 });
  };

  return { getState, increment };
};

const redux = createStore();

console.log(redux.getState());
redux.increment();
console.log(redux.getState());
