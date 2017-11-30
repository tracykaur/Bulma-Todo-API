const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Task = require('./models/task');


Task.create()

app.use(bodyParser.json());


app.get('/api/tasks', (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  })
});

app.post('/api/tasks', (req, res) => {
  console.log(req.body)
  let task = new Task ({ todo: req.body.todo, time: new Date(), complete: req.body.complete})
  task.save((err, task) => {
    if (err) {
      console.log(err)
    } else{
      console.log('Task created');
    }
    res.send(task);
  })
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))
