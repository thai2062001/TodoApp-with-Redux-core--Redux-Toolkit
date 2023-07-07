import filtersReducer from "../components/Filters/filtersReducer";
import todoReducer from "../components/Todo/todoReducer";
import { combineReducers } from "redux";
// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoReducer,
});

export default rootReducer;
