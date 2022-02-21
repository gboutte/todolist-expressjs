import express from 'express';
import { Task } from '../models/Task';
import { TaskRepository } from '../repository/task.repository';
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(JSON.stringify(TaskRepository.list()))
});
router.post('/', (req, res) => {
    let task = new Task(req.body.title,req.body.libelle)
    TaskRepository.create(task)
    res.send(JSON.stringify(TaskRepository.list()))
})
export default router;
