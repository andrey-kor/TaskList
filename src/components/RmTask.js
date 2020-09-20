import TaskList from './TaskList'

function RmTask(tasks, idElForRemove){

    function taskId() {
        for (let i=0; i<tasks.length; i++){
            if (tasks[i].id === idElForRemove) return i
        }
    }

    tasks.splice(taskId(), 1)

    for (let task of tasks){
        if(task.id >= idElForRemove){
            task.id -= 1
        } 
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
    TaskList(tasks)
}

export default RmTask