const initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count + 1 };
    case "reset":
      return { ...state, count: 1 };
    default:
      return state;
  }
};
const makeFreezedObj = (originObj = Object.create(null), newObj) => {
  return Object.freeze({ ...originObj, ...newObj });
};
const createStore = (reducer) => {
  let state = makeFreezedObj(reducer());
  const getState = () => ({ ...state });
  const dispatch = (action) => {
    state = makeFreezedObj(state, reducer(state, action));
    console.log(state);
  };
  return { getState, dispatch };
};

const redux = createStore(reducer);
redux.dispatch({ type: "increase" });
redux.dispatch({ type: "increase" });
redux.dispatch({ type: "reset" });
redux.dispatch({ type: "increase" });
redux.dispatch({ type: "reset" });
redux.dispatch({ type: "increase" });
redux.dispatch({ type: "increase" });
