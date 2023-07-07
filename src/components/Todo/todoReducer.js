const innitstate = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn C#", completed: true, priority: "Low" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "High" },
];
const todoReducer = (state = innitstate, action) => {
  console.log(action, state);
  switch (action.type) {
    case "todoList/addTodo": {
      return [...state, action.payload];
    }
    case "todoList/checkedPriority": {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return state;
  }
};
export default todoReducer;
