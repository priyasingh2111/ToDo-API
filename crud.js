const express = require('express');
const router = express.Router();

const tasks= [ 
    {id: 1, description: 'Task 1', status: 'Complete'},
    {id: 2, description: 'Task 2', status: 'Incomplete'}
];


//To add new tasks
router.post('/tasks',(req,res) => {
    const newTask = req.body;
    newTask.id = tasks.length+1;
    tasks.push(newTask);
    res.status(201).json(newTask);
});


//To get all tasks
router.get('/tasks', (req,res) => {
    res.json(tasks);
});

//To get tasks by ID
router.get('/tasks/:id',(req,res) => {
    const taskId = parseInt(req.params.id);
    let task = tasks.find(t=>t.id === taskId);
    if(task){
        res.json(task);
    }
    else{
        res.status(404).json({ error: "Task Not Found" }); 
    }

});

//To update tasks
router.put('/tasks/:id', (req,res) => {
    const taskId = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(t => t.id === taskId);

    if(taskIndex === -1){
        res.status(404).json({ error: "Task Not Found" }); 
    }
    const updatedTask = req.body;
    updatedTask.id = taskId;
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
});

//To delete tasks
router.delete('/tasks/:id', (req,res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if(taskIndex !== -1){
        tasks.splice(taskIndex,1);
        res.json({message:'Task deleted'});
    }
    else{
        res.status(404).json({ error: "Task Not Found" }); 
    }
});

module.exports = router;