/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(toDoList){
    this.toDoList = []
  }

  add(todo){
    this.toDoList.push(todo)
  }

  remove(indexOfToDo){
    if(this.toDoList[indexOfToDo]) this.toDoList.splice(indexOfToDo,1)
  }

  update(index, updatedTodo){
    if(this.toDoList[index]) this.toDoList[index] = updatedTodo
  }

  getAll(){
    return this.toDoList
  }

  get(indexOfToDo){
    if(this.toDoList[indexOfToDo]) return this.toDoList[indexOfToDo]
    else return null
  }

  clear(){
    this.toDoList.length = 0
  }
}

module.exports = Todo;
