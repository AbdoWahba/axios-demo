var Faker = require("faker");

function generateToDoData() {
  var todo = [];

  for (let id = 1; id < 50; id++) {
    var userid = id % 10;
    var completed = Faker.random.boolean();
    var title = Faker.hacker.phrase();

    todo.push({
      id: id,
      userId: userid,
      title: title,
      completed: completed
    });
  }
  console.log(todo);
  return { todos: todo };
}

module.exports = generateToDoData;
