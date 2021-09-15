import { useEffect, useState } from "react";
import { todoApi } from "../apis/todoApi";

export function UseGetAll(state, search) {
  const [todoList, setTodoList] = useState({});
  console.log("Start hooks", search);
  useEffect(() => {
    console.log("Effect hooks");
    async function getA(se) {
      if (se) {
        const data = await todoApi.searchTodo(se);
        setTodoList(data);
        return;
      }
      console.log("Chui zo day", todoList);

      const data = await todoApi.getAllTodo();
      setTodoList(data);
    }
    getA(search);
  }, [state, search]);
  return todoList;
}
