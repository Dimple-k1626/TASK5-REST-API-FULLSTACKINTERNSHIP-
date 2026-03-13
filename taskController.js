let tasks = [];

exports.getTasks = (req, res) => {
    res.json(tasks);
};

exports.addTask = (req, res) => {

    const newTask = {
        id: Date.now(),
        title: req.body.title,
        status: "Pending"
    };

    tasks.push(newTask);

    res.json(newTask);
};

exports.updateTask = (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if(task){
        task.status = "Completed";
    }

    res.json(task);
};

exports.deleteTask = (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({message:"Task deleted"});
};