const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Todo {
    id: ID!
    done: Boolean!
    title: String!
    createdAt: String
    updatedAt: String
  }

  type Query{
    getTodos: [Todo!]!
  }

  input TodoInput{
    title: String!
  }

  type Mutation {
    createTodo(todo: TodoInput!): Todo!
    completeTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`)