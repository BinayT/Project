const cartPopover = (state = false, action) => {
  switch (action.type) {
    case "CART_CLICKED":
      return !state;
    default:
      return state;
  }
};

export default cartPopover;
