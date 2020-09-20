import TaskList from "./TaskList"

function Search(tasks, value){
    
    let res = []
    let searchFlag = true

    for(let task of tasks){
        let regExp = new RegExp(value, 'i')
        if(regExp.test(task.id) || regExp.test(task.text) || regExp.test(task.date)){
            res.push(task)
        }
    }

    if (res) searchFlag = true
    else searchFlag = false 

    TaskList(tasks, res, searchFlag)
    
}

export default Search