import { Todo } from "./../entity/Todo";
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

class TodoControllerc {
  //get
  async getTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const { todoId } = request.query;
      if (!todoId) {
        const todoList = await getRepository(Todo).createQueryBuilder("todo").getMany();
        return response
          .status(200)
          .json({ errCode: 0, message: "Get all todo successfully!", data: todoList });
      }
      const todoList = await getRepository(Todo)
        .createQueryBuilder()
        .where("id=:id", { id: todoId })
        .getMany();
      response
        .status(200)
        .json({ errCode: 0, message: "Get one todo successfully!", data: todoList });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
  //add
  async addTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const todo = request.body;

      if (Object.keys(todo).length > 0) {
        await getRepository(Todo).createQueryBuilder().insert().into(Todo).values(todo).execute();
        return response
          .status(200)
          .json({ errCode: 0, message: "Add todo successfully!", data: todo });
      }
      return response
        .status(500)
        .json({ errCode: 1, message: "Add todo fail because there aren't enough data!" });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
  // edit
  async editTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const todo = request.body;
      const { todoId } = request.params;

      if (Object.keys(todo).length > 0) {
        await getRepository(Todo)
          .createQueryBuilder()
          .update()
          .set(todo)
          .where("id=:id", { id: todoId })
          .execute();
        return response
          .status(200)
          .json({ errCode: 0, message: "Edit todo successfully!", data: todo });
      }
      return response
        .status(500)
        .json({ errCode: 1, message: "Edit todo fail because there aren't enough data!" });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
  // deleteTodo
  async deleteTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const { todoId } = request.params;
      if (todoId) {
        const status = await getRepository(Todo)
          .createQueryBuilder()
          .delete()
          .from(Todo)
          .where("id=:id", { id: todoId })
          .execute();
        console.log(status);
        return response.status(200).json({ errCode: 0, message: "Delete todo successfully!" });
      }
      return response.status(500).json({ errCode: 1, message: "Delete todo fail!" });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
  // search
  async searchTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const { search } = request.query;
      if (search) {
        const status = await getRepository(Todo)
          .createQueryBuilder("todo")
          // .select()
          .where("todo.name like :name", { name: `%${search}%` })
          .getMany();
        return response
          .status(200)
          .json({ errCode: 0, message: "Search todo successfully!", data: status });
      }
      return response.status(500).json({ errCode: 1, message: "Not found todo" });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
  // set Satatus
  async setStatusTodo(request: Request, response: Response, next: NextFunction) {
    try {
      const { todoId, status } = request.query;
      if (todoId) {
        const check = await getRepository(Todo)
          .createQueryBuilder()
          .update()
          .set({ status: status === "true" })
          .where("id = :id", { id: todoId })
          .execute();
        // console.log(check);

        return response
          .status(200)
          .json({ errCode: 0, message: "Change status todo successfully!" });
      }
      return response.status(500).json({ errCode: 1, message: "Not found todo" });
    } catch (error) {
      response.status(500).json({ errCode: 1, message: error });
    }
  }
}
const TodoController = new TodoControllerc();
export default TodoController;
