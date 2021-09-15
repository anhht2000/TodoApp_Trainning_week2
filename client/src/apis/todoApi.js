import axiosClient from "./axiosClient";

export const todoApi = {
  getAllTodo: () => {
    const url = "/todos/get-todo";
    return axiosClient.get(url);
  },
  getTodo: (todoId) => {
    const url = "/todos/get-todo";
    return axiosClient.get(url + `?todoId=${todoId}`);
  },
  addTodo: (newTodo) => {
    const url = "/todos/add-todo";
    return axiosClient.post(url, newTodo);
  },
  editTodo: (todoId, newTodo) => {
    const url = "/todos/edit-todo";
    return axiosClient.put(url + `/${todoId}`, newTodo);
  },
  deleteTodo: (todoId) => {
    const url = "/todos/delete-todo";
    return axiosClient.delete(url + `/${todoId}`);
  },
  searchTodo: (search) => {
    const url = "/todos/search-todo";
    return axiosClient.get(url + `?search=${search}`);
  },
  changeStatusTodo: (todoId, status) => {
    const url = "/todos/set-staus-todo";
    return axiosClient.patch(url + `?todoId=${todoId}&status=${status}`);
  },
};
