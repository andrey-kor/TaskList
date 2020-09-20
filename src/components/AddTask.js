import CurrentDate from './CurrentDate'
import TaskList from './TaskList'

function AddTask(taskText, taskDate, tasks){
    
    const errorMessage = document.createElement('p')
    errorMessage.className = 'errorMessage'
    errorMessage.innerHTML='Нельзя добавить прошедшую дату'

    function dateValidation(taskDate){

        const currentDate = CurrentDate()

        if (new Date(taskDate) >= new Date (currentDate)) {
            errorMessage.remove()
            return true
        }
        else {
            addForm.after(errorMessage)
            return false
        }
    }

    if (dateValidation(taskDate)){
        // inputTaskName.value = ''
        // inputDate.value = ''
        writeTask(taskText, taskDate)
    }      
    
    function writeTask(taskText, taskDate){

        const item = {
            id: tasks.length+1,
            text: taskText,
            date: taskDate
        }

        tasks.push(item)
        localStorage.setItem('tasks', JSON.stringify(tasks))

        // sort(tasks)
        TaskList(tasks)

    }
}

// function sort(tasks){
//     tasks.sort((a, b) => {
//         console.log("a.id: ", a.id);
//         console.log("b.id: ", b.id);
//         a.id > b.id ? -1 : 1
//     })
// }

export default AddTask