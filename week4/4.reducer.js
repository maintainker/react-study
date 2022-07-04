// import { createStore, makeFreezedObj } from "./redux.js";

// 비즈니스 로직을 외부에서 주입한다.
// state 객체 초기화를 여기서 해준다.
const reducer = (state = makeFreezedObj(), action) => {
  switch (action) {
    case "increment":
      return { ...state, count: (state.count ?? 1) + 1 };
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
  let state = makeFreezedObj(undefined, { count: 1 });
  const getState = () => ({ ...state });
  const increment = () => {
    state = makeFreezedObj(state, { count: state.count + 1 });
  };

  return { getState, increment };
};

const redux = createStore(reducer);
console.log(redux.getState());
redux.increment();
console.log(redux.getState());
