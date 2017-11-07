const initialState = {
  count: false,
};

export default function freiraum(state = initialState, action = {}) {
  switch (action.type) {
    case "COUNT":
      return {
        ...state,
        count: action.payload
      }

    default:
      return state;
  }
}
