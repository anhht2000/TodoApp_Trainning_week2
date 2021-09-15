import * as express from "express";
import TodoController from "../controller/TodoController";
const router = express.Router();

router.get("/get-todo", TodoController.getTodo);
router.post("/add-todo", TodoController.addTodo);
router.put("/edit-todo/:todoId", TodoController.editTodo);
router.delete("/delete-todo/:todoId", TodoController.deleteTodo);
router.get("/search-todo", TodoController.searchTodo);
router.patch("/set-staus-todo", TodoController.setStatusTodo);

const TodoRouter = router;
export default TodoRouter;
