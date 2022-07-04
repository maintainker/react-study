const createStore = () => {
  const state = Object.create(null);
  const getState = () => ({ ...state });
  return { getState };
};
