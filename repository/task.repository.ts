import { Task } from "../models/Task";
class TaskRepository {
    tasks: any = [];
     constructor() {
      this.tasks.push(new Task('My task','Bla bla bla'));
     }

     create(task:Task){
         this.tasks.push(task);
     }

     list(){
         return this.tasks;
     }


   }
let TaskRepositoryObj = new TaskRepository();
export {TaskRepositoryObj as TaskRepository};