import TodoRouter from "./todo";

export default function Routers(app) {
  app.use("/api/todos", TodoRouter);
}
