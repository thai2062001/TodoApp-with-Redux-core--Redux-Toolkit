//Redux Core

const innitstate = {
  search: "",
  status: "All",
  priories: [],
};

const filtersReducer = (state = innitstate, action) => {
  console.log(state, action);
  switch (action.type) {
    case "filters/searchValue": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "filters/radioFilterChange": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "filters/filterPrioriesChange": {
      return {
        ...state,
        priories: action.payload,
      };
    }
    default:
      return state;
  }
};
export default filtersReducer;
