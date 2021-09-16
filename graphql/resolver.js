const Todo = require('../models/todo');

module.exports = {
  async getTodos() {
    try {
      return await Todo.findAll();
    } catch (error) {
      throw new Error('Fetch todos is not available');
    }
  },
  async createTodo({ todo }) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false
      });
    } catch (error) {
      throw new Error('Title is required');
    }
  },
  async completeTodo({id}){
    try{
      const todo = await Todo.findByPk(id);
      todo.done = true;
      await todo.save();
      return todo;
    } catch(error){
      throw new Error ('Id is requires');
    }
  },
  async deleteTodo({id}){
    try {
      const todo = await Todo.findByPk(id);
      await todo.destroy();
      return true;
    } catch (error) {
      throw new Error ('Id is requires');
      return false;
    }
  }
}