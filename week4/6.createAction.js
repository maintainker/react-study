const COUNT_RESET = "count_reset";
const COUNT_INCREASE = "count_increase";
const COUNT_DECREASE = "count_decrease";

const initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case COUNT_INCREASE:
      return { ...state, count: state.count + 1 };
    case COUNT_DECREASE:
      return { ...state, count: state.count - 1 };
    case COUNT_RESET:
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

const createAction = (type, payload = {}) => {
  return {
    type,
    payload: { ...payload },
  };
};

const incre = () => redux.dispatch({ type: COUNT_INCREASE });
const reset = () => redux.dispatch({ type: COUNT_RESET });

console.log(redux.getState());
redux.dispatch({ type: COUNT_INCREASE });
redux.dispatch(createAction(COUNT_INCREASE));
redux.dispatch(createAction(COUNT_RESET));
incre();
reset();
incre();
incre();
