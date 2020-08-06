export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const logInOut = () => {
  return {
    type: "SIGNED_IN",
  };
};

export const cartClicked = () => {
  return {
    type: "CART_CLICKED",
  };
};
