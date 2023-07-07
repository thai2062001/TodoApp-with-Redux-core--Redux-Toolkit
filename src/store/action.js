export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filters/searchValue",
    payload: text,
  };
};

export const radioFilterChange = (text) => {
  return {
    type: "filters/radioFilterChange",
    payload: text,
  };
};

export const filterPrioriesChange = (priorites) => {
  return {
    type: "filters/filterPrioriesChange",
    payload: priorites,
  };
};

export const checkedPriority = (id) => {
  return {
    type: "todoList/checkedPriority",
    payload: id,
  };
};
