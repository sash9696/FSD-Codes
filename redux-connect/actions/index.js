//Actions (types)

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//Action Creators

export const incrementCount = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};
