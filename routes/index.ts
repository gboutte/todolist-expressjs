import express from 'express';
var router = express.Router();
import taskRouter from './task';

router.use('/task',taskRouter);

router.get('/', function(req, res, next) {
    res.send('Go /task')
  });
  
export default router;
