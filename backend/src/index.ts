import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({ fetch: app.fetch, port: 8080 });
console.log("Server is running on http://localhost:8080");