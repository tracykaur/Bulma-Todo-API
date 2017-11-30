const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tasks = [
  { id : 1, todo:'Go for a run', time: '29/11/2017, 13:26:31', complete: true},
  { id : 2, todo:'Go for a walk', time: '29/11/2017, 13:26:31', complete: false}
];

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => res.send(tasks))

app.post('/api/tasks', (req, res) =>{
  console.log(req.body)
  let task = req.body
  tasks.push(task)
  res.send(task)
})


app.listen(3001, () => console.log('Example app listening on port 3001!'))
