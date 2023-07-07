//redux core selector

import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const radioFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;
export const todoRemainingSelector = createSelector(
  todoListSelector,
  radioFilterSelector,
  searchTextSelector,
  prioritiesFilterSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
