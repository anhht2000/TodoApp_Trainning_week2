import React, { createContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { todoApi } from "../apis/todoApi";
import { UseGetAll } from "../hooks/app";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [state, setstate] = useState(false);
  const [search, setSearch] = useState(null);
  let todoList = UseGetAll(state, search);
  //add
  const handleAdd = async (todo) => {
    const res = await todoApi.addTodo(todo);
    if (res.errCode === 0) {
      setstate(!state);
      toast.success("Add todo successfully!");
    } else {
      toast.error("Add todo fail!");
    }
  };
  const handleEdit = async (todo) => {
    const res = await todoApi.editTodo(todo?.id, todo);
    if (res.errCode === 0) {
      setstate(!state);
      toast.success("Edit todo successfully!");
    } else {
      toast.error("Edit todo fail!");
    }
    // toast.warn(todo?.id);
    // delete todo.id;
    // console.log("dlelte", { ...todo });
  };
  //handdle get one
  const handleGetOne = async (id) => {
    const res = await todoApi.getTodo(id);
    if (res.errCode === 0) {
      return res;
    } else {
      return 0;
    }
  };
  //delete
  const handleDelete = async (id) => {
    const res = await todoApi.deleteTodo(id);
    if (res.errCode === 0) {
      setstate(!state);

      toast.success("Delete successfully!");
    } else {
      toast.error("Delete fail!");
    }
  };
  //search
  const handleSearch = async (search) => {
    setSearch(search);
    setstate(!state);
  };
  //change status
  const handleChange = async (id, status) => {
    const res = await todoApi.changeStatusTodo(id, status);
    if (res.errCode === 0) {
      setstate(!state);
    } else {
    }
  };
  return (
    <AppContext.Provider
      value={{
        todoList,
        handleDelete,
        handleAdd,
        handleGetOne,
        handleEdit,
        handleSearch,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  // value={{ todoList }}
}
