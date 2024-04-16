let todos = [
    { id: 1, title: "Buy groceries", priority: 2, createdAt: new Date(), done: false, doneAt: null },
    { id: 2, title: "Schedule doctor appointment", priority: 1, createdAt: new Date(), done: false, doneAt: null }
  ];
  
  exports.getAllTodos = (req, res) => {
    res.status(200).json(todos);
  };
  
  exports.createTodo = (req, res) => {
    const todo = {
      id: todos.length + 1,
      title: req.body.title,
      priority: req.body.priority,
      createdAt: new Date(),
      done: false,
      doneAt: null
    };
    todos.push(todo);
    res.status(201).json(todo);
  };
  
  exports.getTodoById = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
      return res.status(404).send('The TODO with the given ID was not found.');
    }
    res.json(todo);
  };
  
  exports.updateTodo = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
      return res.status(404).send('The TODO with the given ID was not found.');
    }
    todo.title = req.body.title;
    todo.priority = req.body.priority;
    todo.done = req.body.done;
    if (req.body.done) {
      todo.doneAt = new Date();
    }
    res.json(todo);
  };
  
  exports.deleteTodo = (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
  };