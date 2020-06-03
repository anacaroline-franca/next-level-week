import express from "express";

const routes = express.Router();

routes.get("/users", (request, response) => {
  console.log("Listagem de usuários");
  response.send("Hello World");
});

export default routes;