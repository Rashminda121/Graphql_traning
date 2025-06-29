import express from "express";
import schema from "./data/schema.js";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./data/resolvers.js";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
