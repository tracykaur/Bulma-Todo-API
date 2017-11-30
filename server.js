const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Task = require('./models/task');


const tasks = [
  { id : 1, todo:'Go for a run', time: '29/11/2017, 13:26:31', complete: true},
  { id : 2, todo:'Go for a walk', time: '29/11/2017, 13:26:31', complete: false}
];

Task.create()

app.use(bodyParser.json());

// router.get('/students', (req, res) => {
//   Student.find().then((students) => {
//     res.json(students);
//   })});

app.get('/api/tasks', (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  })
});

app.post('/api/tasks', (req, res) =>{
  console.log(req.body)
  let task = req.body
  tasks.push(task)
  res.send(task)
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))
